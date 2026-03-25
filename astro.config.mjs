// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
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

const scheduledSlugs = getScheduledSlugs();

export default defineConfig({
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  site: "https://lawsupport.ch",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => {
        // Extract slug from any URL path containing a blog post slug
        // Works regardless of URL structure (/blog/slug/ or /cocoon/slug/)
        for (const slug of scheduledSlugs) {
          if (page.includes(`/${slug}/`)) {
            return false;
          }
        }
        // Exclude thank-you page from sitemap
        if (page.includes("/thank-you/")) return false;
        return true;
      },
    }),
  ],
});
