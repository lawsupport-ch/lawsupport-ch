// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  site: 'https://lawsupport.ch',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
