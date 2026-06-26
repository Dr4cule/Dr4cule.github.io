// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // User Pages site → served from the root, so no `base` needed.
  site: 'https://dr4cule.github.io',
  integrations: [tailwind(), sitemap(), mdx()],
  prefetch: true,
});
