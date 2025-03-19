import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // PORT
  server: {
    port: 3000
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), icon(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  // Build configuration
  build: {
    // Exclude node_modules and .dist folders from processing
    exclude: ['**/node_modules/**', '**/.dist/**']
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});