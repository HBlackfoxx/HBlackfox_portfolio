import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://boukri.me',
  // PORT
  server: {
    port: 3000
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), icon(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
      langs: [],
      transformers: [
        {
          name: 'add-line-numbers',
          pre(node) {
            this.addClassToHast(node, 'line-numbers');
          },
          line(node, line) {
            node.properties['data-line'] = line;
            this.addClassToHast(node, 'line');
          }
        }
      ]
    }
  }), sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
      langs: [],
      transformers: [
        {
          name: 'add-line-numbers',
          pre(node) {
            this.addClassToHast(node, 'line-numbers');
          },
          line(node, line) {
            node.properties['data-line'] = line;
            this.addClassToHast(node, 'line');
          }
        }
      ]
    }
  },
  // Build configuration
  build: {
    // Exclude node_modules and .dist folders from processing
    exclude: ['**/node_modules/**', '**/.dist/**']
  },
  output: "static"
});