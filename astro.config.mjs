// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import fs from "node:fs";
import path from "node:path";

/**
 * Read blog frontmatter at config time to find scheduled (future publishDate) slugs.
 * These pages get noindex in [slug].astro and must be excluded from sitemap.
 */
function getScheduledSlugs() {
  const blogDir = path.resolve("./src/content/blog");
  const slugs = new Set();
  const now = new Date();

  if (!fs.existsSync(blogDir)) return slugs;

  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith(".md")) continue;
    const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const match = content.match(/^publishDate:\s*"?(\d{4}-\d{2}-\d{2})"?/m);
    if (match) {
      const publishDate = new Date(match[1]);
      if (publishDate > now) {
        slugs.add(file.replace(/\.md$/, ""));
      }
    }
  }

  return slugs;
}

function getSlugLastmod() {
  const blogDir = path.resolve("./src/content/blog");
  const map = new Map();
  if (!fs.existsSync(blogDir)) return map;

  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith(".md")) continue;
    const content = fs.readFileSync(path.join(blogDir, file), "utf-8");

    const modMatch = content.match(/^dateModified:\s*"?(\d{4}-\d{2}-\d{2})"?/m);
    const dateMatch = content.match(/^date:\s*"?(\d{2})\.(\d{2})\.(\d{4})"?/m);

    let iso = null;
    if (modMatch) {
      iso = new Date(modMatch[1]).toISOString();
    } else if (dateMatch) {
      iso = new Date(`${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}`).toISOString();
    }
    if (iso) {
      map.set(file.replace(/\.md$/, ""), iso);
    }
  }
  return map;
}

const scheduledSlugs = getScheduledSlugs();
const slugLastmod = getSlugLastmod();

export default defineConfig({
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  site: "https://lawsupport.ch",
  trailingSlash: "always",
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["nofollow", "noopener"] }],
    ],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        for (const slug of scheduledSlugs) {
          if (page.includes(`/${slug}/`)) {
            return false;
          }
        }
        if (page.includes("/thank-you/")) return false;
        return true;
      },
      serialize: (item) => {
        for (const [slug, iso] of slugLastmod) {
          if (item.url.includes(`/${slug}/`)) {
            item.lastmod = iso;
            break;
          }
        }
        return item;
      },
    }),
  ],
});
