#!/usr/bin/env python3
"""Audit all HTML files in dist/ for broken code, leaked artifacts, and rendering issues."""

import os
import re
import sys
from html.parser import HTMLParser
from collections import defaultdict

DIST = "/opt/projects/lawsupport-ch/dist"
findings = []

def add(filepath, line, category, detail):
    rel = os.path.relpath(filepath, DIST)
    detail_trunc = detail[:200]
    findings.append((rel, line, category, detail_trunc))

# ─── HTML parser to extract visible text vs script/style ───
class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.visible_texts = []  # (line, text)
        self._skip = False
        self._skip_tags = {'script', 'style', 'noscript'}
        self._tag_stack = []
        self.tag_counts = defaultdict(int)
        self.h1_count = 0
        self.empty_headings = []  # (line, tag)
        self.empty_links = []    # (line,)
        self._current_tag = None
        self._current_tag_line = 0
        self._current_tag_text = ""
        self._in_a = False
        self._a_line = 0
        self._a_has_content = False
        self.all_attrs = []  # (line, tag, attrs)

    def handle_starttag(self, tag, attrs):
        line = self.getpos()[0]
        self.tag_counts[tag] += 1
        self.all_attrs.append((line, tag, attrs))
        
        if tag in self._skip_tags:
            self._skip = True
            self._tag_stack.append(tag)
            return
        
        if tag == 'h1':
            self.h1_count += 1
        
        if tag in ('h1','h2','h3','h4'):
            self._current_tag = tag
            self._current_tag_line = line
            self._current_tag_text = ""
        
        if tag == 'a':
            self._in_a = True
            self._a_line = line
            self._a_has_content = False
            # Check if has child img or svg (approximate)
            for aname, aval in attrs:
                if aname == 'aria-label' and aval:
                    self._a_has_content = True

    def handle_endtag(self, tag):
        line = self.getpos()[0]
        if tag in self._skip_tags and self._tag_stack and self._tag_stack[-1] == tag:
            self._tag_stack.pop()
            if not self._tag_stack:
                self._skip = False
            return
        
        if tag in ('h1','h2','h3','h4') and self._current_tag == tag:
            if not self._current_tag_text.strip():
                self.empty_headings.append((self._current_tag_line, tag))
            self._current_tag = None
        
        if tag == 'a' and self._in_a:
            if not self._a_has_content:
                self.empty_links.append((self._a_line,))
            self._in_a = False

    def handle_data(self, data):
        line = self.getpos()[0]
        if self._current_tag and data.strip():
            self._current_tag_text += data
        if self._in_a and data.strip():
            self._a_has_content = True
        if not self._skip:
            if data.strip():
                self.visible_texts.append((line, data))

    def handle_comment(self, data):
        pass

    def handle_entityref(self, name):
        if self._in_a:
            self._a_has_content = True
        if self._current_tag:
            self._current_tag_text += f"&{name};"

    def handle_charref(self, name):
        if self._in_a:
            self._a_has_content = True
        if self._current_tag:
            self._current_tag_text += f"&#{name};"


def check_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
            lines = content.split('\n')
    except Exception as e:
        add(filepath, 0, "ERROR", f"Cannot read file: {e}")
        return

    # Parse HTML
    parser = TextExtractor()
    try:
        parser.feed(content)
    except Exception as e:
        add(filepath, 0, "PARSE_ERROR", f"HTML parse error: {e}")

    # ─── 1. Visible code/template artifacts ───
    for line_no, text in parser.visible_texts:
        # Template tags
        if re.search(r'\{\{.*?\}\}', text):
            add(filepath, line_no, "TEMPLATE_TAG", f"Visible {{{{ }}}} in text: {text.strip()}")
        if re.search(r'\{%.*?%\}', text):
            add(filepath, line_no, "TEMPLATE_TAG", f"Visible {{% %}} in text: {text.strip()}")
        if re.search(r'\{#.*?#\}', text):
            add(filepath, line_no, "TEMPLATE_COMMENT", f"Visible {{# #}} in text: {text.strip()}")
        
        # JS statements in body text
        if re.search(r'^\s*(import\s+)', text) and 'important' not in text.lower():
            # Filter false positives: only flag if it looks like JS import
            if re.search(r'^\s*import\s+[\{\'\"a-zA-Z]', text):
                add(filepath, line_no, "CODE_LEAK", f"Visible import statement: {text.strip()}")
        
        for kw in ['const ', 'let ', 'var ']:
            if re.search(r'^\s*' + kw.strip() + r'\s+\w+\s*=', text):
                add(filepath, line_no, "CODE_LEAK", f"Visible JS declaration: {text.strip()}")
        
        # Undefined/null/NaN/[object Object]
        if re.search(r'\bundefined\b', text, re.IGNORECASE) and 'undefined' not in text.lower().replace('undefined',''):
            # Only flag standalone undefined
            stripped = text.strip()
            if stripped == 'undefined' or re.search(r'(?<!\w)undefined(?!\w)', stripped):
                add(filepath, line_no, "CODE_LEAK", f"Visible 'undefined': {stripped}")
        
        if re.search(r'\[object Object\]', text):
            add(filepath, line_no, "CODE_LEAK", f"Visible [object Object]: {text.strip()}")
        
        if re.search(r'(?<!\w)NaN(?!\w)', text) and len(text.strip()) < 50:
            add(filepath, line_no, "CODE_LEAK", f"Visible NaN: {text.strip()}")
        
        # TODO/FIXME/HACK/XXX
        for marker in ['TODO', 'FIXME', 'HACK', 'XXX']:
            if marker in text:
                add(filepath, line_no, "DEV_MARKER", f"Visible {marker}: {text.strip()}")
        
        # Framework component tags as text
        for ftag in ['<Astro', '<Fragment', '<Slot']:
            if ftag in text:
                add(filepath, line_no, "FRAMEWORK_LEAK", f"Framework tag in text: {text.strip()}")

    # Raw frontmatter at start of visible content
    if parser.visible_texts:
        first_texts = [(l, t) for l, t in parser.visible_texts[:5]]
        for line_no, text in first_texts:
            if text.strip() == '---':
                add(filepath, line_no, "FRONTMATTER", f"Raw frontmatter delimiter visible")

    # ─── 2. Broken HTML ───
    # Multiple H1
    if parser.h1_count > 1:
        add(filepath, 0, "MULTI_H1", f"Page has {parser.h1_count} <h1> tags")
    
    # No H1
    if parser.h1_count == 0:
        add(filepath, 0, "NO_H1", f"Page has no <h1> tag")

    # Empty headings
    for line_no, tag in parser.empty_headings:
        add(filepath, line_no, "EMPTY_HEADING", f"Empty <{tag}> tag")

    # Empty links  
    for (line_no,) in parser.empty_links:
        # Recheck in source if the <a> actually has img/svg children
        pass  # Too many false positives with icons, skip strict empty link check

    # ─── 3. Leaked sensitive data ───
    for i, line in enumerate(lines, 1):
        # API keys/tokens
        if re.search(r'sk-[a-zA-Z0-9]{20,}', line):
            add(filepath, i, "LEAKED_KEY", f"Possible API key (sk-): {line.strip()}")
        if re.search(r'ghp_[a-zA-Z0-9]{20,}', line):
            add(filepath, i, "LEAKED_KEY", f"Possible GitHub token: {line.strip()}")
        if re.search(r'bot\d+:[A-Za-z0-9_-]{30,}', line):
            add(filepath, i, "LEAKED_KEY", f"Possible bot token: {line.strip()}")
        
        # Dev emails
        if re.search(r'(test|dev|admin)@(localhost|example|test)', line, re.IGNORECASE):
            add(filepath, i, "DEV_EMAIL", f"Dev/test email: {line.strip()}")
        
        # Localhost references (skip common false positives in CSP headers etc)
        if re.search(r'(localhost|127\.0\.0\.1)', line) and '<script' not in line.lower():
            # Skip if it's in a comment or meta CSP
            if 'content-security-policy' not in line.lower() and '<!--' not in line:
                add(filepath, i, "LOCALHOST", f"Localhost reference: {line.strip()}")

    # ─── 4. Broken rendering artifacts ───
    for i, line in enumerate(lines, 1):
        # Double-encoded entities
        if '&amp;amp;' in line:
            add(filepath, i, "DOUBLE_ENCODE", f"Double-encoded &amp;amp;: {line.strip()}")
        if '&amp;lt;' in line or '&amp;gt;' in line:
            add(filepath, i, "DOUBLE_ENCODE", f"Double-encoded entity: {line.strip()}")
    
    for line_no, text in parser.visible_texts:
        # Escaped HTML that should render
        if '&lt;' in text and '&gt;' in text:
            # Could be code examples, only flag if looks like it should be HTML
            if re.search(r'&lt;(div|span|p|a|h[1-6]|section|article)', text):
                add(filepath, line_no, "ESCAPED_HTML", f"HTML entities that should render: {text.strip()}")
        
        # Placeholder text
        if re.search(r'lorem ipsum', text, re.IGNORECASE):
            add(filepath, line_no, "PLACEHOLDER", f"Lorem ipsum text found: {text.strip()}")
        if re.search(r'\b(placeholder|coming soon|TBD)\b', text, re.IGNORECASE):
            # Avoid false positives in form placeholder attrs (already filtered to visible text)
            add(filepath, line_no, "PLACEHOLDER", f"Placeholder text: {text.strip()}")

    # ─── 5. CSS/JS issues in attributes ───
    for line_no, tag, attrs in parser.all_attrs:
        for aname, aval in attrs:
            if aval is None:
                continue
            if aname == 'style' and 'undefined' in str(aval):
                add(filepath, line_no, "STYLE_UNDEFINED", f"Undefined in inline style: {aval}")
            if aname == 'class' and 'undefined' in str(aval):
                add(filepath, line_no, "CLASS_UNDEFINED", f"Undefined in class: {aval}")

    # ─── Check for unclosed major structural tags (heuristic) ───
    for tag in ['section', 'article', 'main']:
        opens = len(re.findall(f'<{tag}[\\s>]', content, re.IGNORECASE))
        closes = len(re.findall(f'</{tag}>', content, re.IGNORECASE))
        if opens != closes:
            add(filepath, 0, "UNCLOSED_TAG", f"<{tag}> open={opens} close={closes} mismatch")


# ─── Main ───
html_files = []
for root, dirs, files in os.walk(DIST):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

html_files.sort()
print(f"Scanning {len(html_files)} HTML files...\n")

for hf in html_files:
    check_file(hf)

# ─── Report ───
if not findings:
    print("No issues found!")
    sys.exit(0)

# Group by category
by_cat = defaultdict(list)
for path, line, cat, detail in findings:
    by_cat[cat].append((path, line, detail))

print(f"{'='*80}")
print(f"TOTAL FINDINGS: {len(findings)} across {len(set(f[0] for f in findings))} files")
print(f"{'='*80}\n")

for cat in sorted(by_cat.keys()):
    items = by_cat[cat]
    print(f"\n{'─'*60}")
    print(f"  [{cat}] — {len(items)} finding(s)")
    print(f"{'─'*60}")
    for path, line, detail in items:
        print(f"  {path}:{line}")
        print(f"    → {detail}")
    print()

# Summary
print(f"\n{'='*80}")
print("SUMMARY BY CATEGORY:")
for cat in sorted(by_cat.keys()):
    print(f"  {cat}: {len(by_cat[cat])}")
print(f"{'='*80}")
