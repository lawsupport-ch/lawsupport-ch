import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.string(),
    publishDate: z.string().optional(),
    dateModified: z.string().optional(),
    category: z.string().default("Swiss Corporate Law"),
    categoryHref: z.string().default("/blog/"),
    readTime: z.string().default("5 min read"),
    heroImage: z.string().optional(),
    pageLevel: z.number().default(3),
    faqItems: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
    tocItems: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
        })
      )
      .default([]),
    relatedArticles: z
      .array(
        z.object({
          title: z.string(),
          href: z.string(),
          image: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { blog };
