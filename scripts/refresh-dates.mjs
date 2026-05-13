#!/usr/bin/env node
/**
 * Refresh dateModified frontmatter across all 175 blog posts.
 * Deterministic hash → days back from 2026-05-13 (range 1..14).
 * Skips posts whose publishDate is in the future (still scheduled).
 * If publishDate is in past but dateModified is missing or older than publishDate,
 * inject `dateModified` after the `date:` line.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG = path.resolve(__dirname, '..', 'src', 'content', 'blog');
const TODAY = new Date('2026-05-13T00:00:00Z');

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return (h >>> 0);
}

function dateBackBy(days) {
  return new Date(TODAY.getTime() - days * 86400000).toISOString().slice(0, 10);
}

function modFor(name, publishDateIso) {
  // Pick a date back from today, but never before publishDate
  const span = 14;
  const back = (hashStr(name) % span) + 1; // 1..14 days
  let mod = dateBackBy(back);
  if (publishDateIso && mod < publishDateIso) {
    // shift to publish date
    mod = publishDateIso;
  }
  return mod;
}

function ddmmyyyyToIso(s) {
  const m = s.match(/(\d{2})\.(\d{2})\.(\d{4})/);
  if (!m) return null;
  return `${m[3]}-${m[2]}-${m[1]}`;
}

async function main() {
  const files = (await fs.readdir(BLOG)).filter(f => f.endsWith('.md'));
  let changed = 0, skipped = [];

  for (const f of files) {
    const fp = path.join(BLOG, f);
    let src = await fs.readFile(fp, 'utf8');
    const fmMatch = src.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];

    const pdMatch = fm.match(/^publishDate:\s*"?(\d{4}-\d{2}-\d{2})"?/m);
    const dateMatch = fm.match(/^date:\s*"(\d{2}\.\d{2}\.\d{4})"/m);
    const dmMatch = fm.match(/^dateModified:\s*"?(\d{4}-\d{2}-\d{2})"?/m);

    let publishIso = null;
    if (pdMatch) publishIso = pdMatch[1];
    else if (dateMatch) publishIso = ddmmyyyyToIso(dateMatch[1]);

    if (publishIso && publishIso > '2026-05-13') {
      skipped.push(`${f} (future publishDate ${publishIso})`);
      continue;
    }

    const newMod = modFor(f, publishIso);

    if (dmMatch) {
      // replace existing
      src = src.replace(/^dateModified:\s*"?\d{4}-\d{2}-\d{2}"?/m, `dateModified: "${newMod}"`);
    } else if (dateMatch) {
      // inject after `date:` line
      src = src.replace(/^(date:\s*"\d{2}\.\d{2}\.\d{4}")$/m, `$1\ndateModified: "${newMod}"`);
    } else {
      skipped.push(`${f} (no date or publishDate)`);
      continue;
    }

    await fs.writeFile(fp, src);
    changed++;
  }

  console.log(`updated: ${changed}/${files.length}`);
  if (skipped.length) {
    console.log('skipped:');
    skipped.forEach(s => console.log('  ' + s));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
