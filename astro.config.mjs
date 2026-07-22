import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cardi.co.id',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
