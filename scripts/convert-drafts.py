#!/usr/bin/env python3
"""Convert seomachine drafts to Astro content collection blog posts."""

import os
import re
import json
import yaml
from datetime import datetime, timedelta

DRAFTS_DIR = "/opt/projects/seomachine/projects/swiss-register/drafts/"
OUTPUT_DIR = "/opt/projects/lawsupport-ch/src/content/blog/"

SKIP_FILES = {
    "homepage-2026-03-19.md",
    "about-2026-03-19.md",
    "expert-morgan-hartley-2026-03-19.md",
}

CLUSTER_MAP = {
    "Company Formation": ("Company Formation", "/services/company-formation/"),
    "Company Formation & Entity Types": ("Company Formation", "/services/company-formation/"),
    "company-formation-entity-types": ("Company Formation", "/services/company-formation/"),
    "Licensing & Permits": ("Licensing & Permits", "/services/financial-licensing/"),
    "Licensing & Regulated Activities": ("Licensing & Permits", "/services/financial-licensing/"),
    "Financial Licensing & FINMA": ("Licensing & Permits", "/services/financial-licensing/"),
    "FINMA & Crypto": ("Licensing & Permits", "/services/financial-licensing/"),
    "Banking": ("Banking & Finance", "/blog/"),
    "Banking & Finance": ("Banking & Finance", "/blog/"),
    "Immigration": ("Immigration", "/blog/"),
    "Immigration & Residence Permits": ("Immigration", "/blog/"),
    "Immigration & Residency": ("Immigration", "/blog/"),
    "Immigration, Residence & Citizenship": ("Immigration", "/blog/"),
    "Tax": ("Tax & Accounting", "/blog/"),
    "Tax & Accounting": ("Tax & Accounting", "/blog/"),
    "Tax, Accounting & Audit": ("Tax & Accounting", "/blog/"),
    "M&A, Restructuring & Corporate Transactions": ("Corporate Transactions", "/blog/"),
    "IP, Commercial & Contracts": ("IP & Commercial Law", "/blog/"),
    "IP & Technology Law": ("IP & Commercial Law", "/blog/"),
    "Nominee & Administrative Services": ("Company Administration", "/blog/"),
    "Company Administration": ("Company Administration", "/blog/"),
    "Employment & HR": ("Employment Law", "/blog/"),
    "Labour Law & Social Insurance": ("Employment Law", "/blog/"),
    "Legal System & Courts": ("Swiss Legal System", "/blog/"),
}


def extract_slug(filename):
    """Extract slug from filename like 'ag-formation-switzerland-2026-03-19.md'."""
    return re.sub(r"-\d{4}-\d{2}-\d{2}\.md$", "", filename)


def fix_yaml_line(line):
    """Fix unquoted YAML values that contain colons."""
    # Skip lines that are already quoted, list items, or empty
    stripped = line.strip()
    if not stripped or stripped.startswith("-") or stripped.startswith("#"):
        return line
    # Match key: value pattern
    m = re.match(r"^(\s*)([\w_]+):\s+(.+)$", line)
    if not m:
        return line
    indent, key, value = m.group(1), m.group(2), m.group(3)
    # If value is already quoted or is a number/bool, leave it
    if value.startswith('"') or value.startswith("'") or value.startswith("["):
        return line
    # If value contains a colon (common problem), quote it
    if ":" in value:
        escaped = value.replace("\\", "\\\\").replace('"', '\\"')
        return f'{indent}{key}: "{escaped}"'
    return line


def parse_frontmatter(text):
    """Parse YAML frontmatter from markdown text."""
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.DOTALL)
    if not match:
        return {}, text
    fm_text = match.group(1)
    body = text[match.end():]
    # First try direct parse
    try:
        fm = yaml.safe_load(fm_text)
        return fm or {}, body
    except yaml.YAMLError:
        pass
    # Fix unquoted values and retry
    fixed_lines = [fix_yaml_line(line) for line in fm_text.split("\n")]
    fixed_text = "\n".join(fixed_lines)
    try:
        fm = yaml.safe_load(fixed_text)
    except yaml.YAMLError:
        # Last resort: manual extraction
        fm = {}
        for line in fm_text.split("\n"):
            m = re.match(r"^([\w_]+):\s+(.+)$", line)
            if m:
                fm[m.group(1)] = m.group(2).strip('"').strip("'")
    return fm or {}, body


def extract_faq_from_schema(body):
    """Extract FAQ items from FAQPage schema JSON-LD in body."""
    faq_items = []
    pattern = r'<script\s+type="application/ld\+json">\s*(\{[^<]*?"FAQPage"[^<]*?\})\s*</script>'
    for match in re.finditer(pattern, body, re.DOTALL):
        try:
            data = json.loads(match.group(1))
            if data.get("@type") == "FAQPage" and "mainEntity" in data:
                for q in data["mainEntity"]:
                    if q.get("@type") == "Question":
                        question = q.get("name", "")
                        answer = q.get("acceptedAnswer", {}).get("text", "")
                        if question and answer:
                            faq_items.append({"question": question, "answer": answer})
        except json.JSONDecodeError:
            continue
    return faq_items


def extract_toc_from_body(body):
    """Extract TOC items from ## headings in the body."""
    toc_items = []
    for match in re.finditer(r"^## (.+)$", body, re.MULTILINE):
        title = match.group(1).strip()
        if title.lower().startswith("frequently asked questions"):
            continue
        slug = re.sub(r"[^\w\s-]", "", title.lower())
        slug = re.sub(r"[\s]+", "-", slug).strip("-")
        slug = slug[:60].rstrip("-")
        toc_items.append({"id": slug, "title": title})
    return toc_items


def clean_body(body):
    """Remove schema scripts, image comments, and fix links."""
    # Remove all <script type="application/ld+json"> blocks (with or without comment)
    body = re.sub(
        r'<!--\s*(?:SCHEMA|Schema)[^>]*-->\s*<script\s+type="application/ld\+json">.*?</script>\s*',
        "", body, flags=re.DOTALL,
    )
    body = re.sub(
        r'<script\s+type="application/ld\+json">.*?</script>\s*',
        "", body, flags=re.DOTALL,
    )
    # Remove <!-- IMAGE: ... --> and <!-- HERO IMAGE ... --> comments
    body = re.sub(r"<!--\s*(?:IMAGE|HERO IMAGE)[^>]*-->\s*", "", body)
    # Remove markdown images that reference non-existent local files
    # Keep images with absolute URLs or /assets/ paths
    body = re.sub(r"!\[[^\]]*\]\((?!https?://|/)([^)]+)\)(\{[^}]*\})?\s*", "", body)
    # Remove <!-- INTERNAL LINK: ... --> comments
    body = re.sub(r"<!--\s*INTERNAL LINK[^>]*-->\s*", "", body)
    # Remove any other HTML comments that are just metadata
    body = re.sub(r"<!--\s*(?:CTA|EXTERNAL|NOTE|TODO)[^>]*-->\s*", "", body)

    # Convert markdown internal links: [text](/something/) -> [text](/blog/something/)
    skip_prefixes = ("about", "contacts", "services", "blog", "privacy", "terms", "imprint", "#")
    def fix_md_link(m):
        text, path = m.group(1), m.group(2)
        if any(path.startswith(p) for p in skip_prefixes):
            return m.group(0)
        return f"[{text}](/blog/{path}/)"

    body = re.sub(r'\[([^\]]+)\]\(/([\w-]+)/?\)', fix_md_link, body)

    # Fix href= style internal links
    def fix_href_link(m):
        path = m.group(1)
        if any(path.startswith(p) for p in skip_prefixes):
            return m.group(0)
        return f'href="/blog/{path}/"'

    body = re.sub(r'href="/([\w-]+)/?"', fix_href_link, body)

    # Remove multiple blank lines
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def format_date_display(date_str):
    """Convert YYYY-MM-DD to DD.MM.YYYY for display."""
    try:
        dt = datetime.strptime(str(date_str)[:10], "%Y-%m-%d")
        return dt.strftime("%d.%m.%Y")
    except (ValueError, TypeError):
        return "19.03.2026"


def yaml_str(s):
    """Escape a string for YAML output."""
    if not s:
        return '""'
    s = str(s)
    if any(c in s for c in ':#{}[]&*?|>!%@`\',"\n'):
        escaped = s.replace("\\", "\\\\").replace('"', '\\"')
        return f'"{escaped}"'
    return f'"{s}"'


def convert_file(filepath, slug, publish_date=None):
    """Convert a single draft file to blog content."""
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    fm, body = parse_frontmatter(text)

    title = fm.get("title", slug.replace("-", " ").title())
    description = fm.get("meta_description", fm.get("description", ""))
    date_raw = fm.get("date", "2026-03-19")
    date_display = format_date_display(date_raw)

    cluster = fm.get("cluster", "")
    if isinstance(cluster, str):
        cluster = cluster.strip('"').strip("'")
    category, category_href = CLUSTER_MAP.get(cluster, ("Swiss Corporate Law", "/blog/"))

    reading_time = str(fm.get("reading_time", "5"))
    # reading_time may be "13 min" or just "13"
    if "min" in reading_time:
        read_time = f"{reading_time} read" if "read" not in reading_time else reading_time
    else:
        read_time = f"{reading_time} min read"

    faq_items = extract_faq_from_schema(body)
    toc_items = extract_toc_from_body(body)
    body = clean_body(body)

    lines = ["---"]
    lines.append(f"title: {yaml_str(title)}")
    lines.append(f"description: {yaml_str(description)}")
    lines.append(f"date: {yaml_str(date_display)}")
    if publish_date:
        lines.append(f"publishDate: {yaml_str(publish_date)}")
    lines.append(f"category: {yaml_str(category)}")
    lines.append(f"categoryHref: {yaml_str(category_href)}")
    lines.append(f"readTime: {yaml_str(read_time)}")

    if faq_items:
        lines.append("faqItems:")
        for item in faq_items:
            lines.append(f"  - question: {yaml_str(item['question'])}")
            lines.append(f"    answer: {yaml_str(item['answer'])}")

    if toc_items:
        lines.append("tocItems:")
        for item in toc_items:
            lines.append(f"  - id: {yaml_str(item['id'])}")
            lines.append(f"    title: {yaml_str(item['title'])}")

    lines.append("---")
    lines.append("")
    lines.append(body)

    output_path = os.path.join(OUTPUT_DIR, f"{slug}.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    return True


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    files = []
    for filename in sorted(os.listdir(DRAFTS_DIR)):
        if not filename.endswith(".md"):
            continue
        if filename in SKIP_FILES:
            print(f"  SKIP: {filename}")
            continue
        filepath = os.path.join(DRAFTS_DIR, filename)
        slug = extract_slug(filename)
        files.append((filepath, slug, filename))

    files.sort(key=lambda x: x[1])

    total = len(files)
    immediate = 50
    scheduled_start = datetime(2026, 3, 26)

    print(f"Found {total} articles to convert")
    print(f"  Immediate publish: {min(immediate, total)}")
    print(f"  Scheduled: {max(0, total - immediate)}")
    print()

    converted = 0
    for i, (filepath, slug, filename) in enumerate(files):
        if i < immediate:
            publish_date = None
        else:
            days_offset = (i - immediate) * 2
            pub_dt = scheduled_start + timedelta(days=days_offset)
            publish_date = pub_dt.strftime("%Y-%m-%d")

        try:
            convert_file(filepath, slug, publish_date)
            status = "IMMEDIATE" if publish_date is None else f"SCHEDULED {publish_date}"
            print(f"  [{i+1}/{total}] {slug} -> {status}")
            converted += 1
        except Exception as e:
            print(f"  ERROR: {filename}: {e}")

    print(f"\nDone! Converted {converted}/{total} articles.")
    print(f"Output: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
