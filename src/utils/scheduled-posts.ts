/**
 * Utility to identify scheduled (future publishDate) blog posts.
 * Used by both [slug].astro (for noindex) and sitemap filter (for exclusion).
 */
import { getCollection } from "astro:content";

export async function getScheduledSlugs(): Promise<Set<string>> {
  const posts = await getCollection("blog");
  const now = new Date();
  const scheduled = new Set<string>();

  for (const post of posts) {
    if (post.data.publishDate && new Date(post.data.publishDate) > now) {
      scheduled.add(post.id);
    }
  }

  return scheduled;
}
