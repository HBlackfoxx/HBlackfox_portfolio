# Setup Instructions for New Features

## RSS Feed & Sitemap

To enable the RSS feed and sitemap, you need to install Astro packages:

```bash
npm install @astrojs/rss @astrojs/sitemap
```

Then update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';  // Add this
import node from "@astrojs/node";

export default defineConfig({
  site: 'https://boukri.me',  // Add your site URL
  server: {
    port: 3000
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    icon(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'one-dark-pro',
        wrap: true,
        langs: [],
        transformers: [/* ... existing transformers ... */]
      }
    }),
    sitemap(),  // Add this
  ],
  // ... rest of config
});
```

### RSS Feed
- **URL:** `https://boukri.me/rss.xml`
- **File:** `src/pages/rss.xml.ts` ✅ Created
- Users can subscribe in feed readers (Feedly, Inoreader, etc.)

### Sitemap
- **URL:** `https://boukri.me/sitemap-index.xml`
- Auto-generated on build
- Submit to Google Search Console

---

## Image Optimization

For better performance, update blog post images to use lazy loading:

### In Blog Index (`src/pages/blog/index.astro`):

Already using Astro's `<Image>` component ✅

### In MDX Files:

When adding images to blog posts, use:

```mdx
![Alt text](./images/my-image.jpg)
```

Or with Astro Image component:

```mdx
import { Image } from 'astro:assets';
import myImage from './images/my-image.jpg';

<Image src={myImage} alt="Description" loading="lazy" />
```

### Optimization Checklist:
- [ ] Convert images to WebP format
- [ ] Resize to appropriate dimensions (1200px wide max for blog headers)
- [ ] Compress with tools like TinyPNG or Squoosh
- [ ] Add meaningful alt text for accessibility
- [ ] Use `loading="lazy"` for images below the fold

---

## What's Already Implemented ✅

1. **Copy Button** - Minimal icon-only, appears on hover
2. **404 Page** - Custom error page with helpful links
3. **Reading Progress Bar** - Shows scroll progress at top
4. **Back to Top Button** - Smooth scroll to top
5. **Table of Contents** - Auto-generated from H2/H3 headings
6. **RSS Feed** - Ready (needs @astrojs/rss package)
7. **Breadcrumbs** - Navigation path
8. **Related Posts** - Smart recommendations
9. **Canonical URLs** - SEO optimization
10. **Enhanced Schema** - Rich snippets for Google

---

## Next Steps

1. **Install packages:**
   ```bash
   npm install @astrojs/rss @astrojs/sitemap
   ```

2. **Update astro.config.mjs** (see above)

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

4. **Test RSS feed:**
   - Visit `http://localhost:3000/rss.xml`

5. **After deploying:**
   - Submit sitemap to Google Search Console
   - Add RSS link to your site header/footer
   - Test with Google Rich Results Test

---

## RSS Subscribe Link

Add to your blog page or footer:

```astro
<a href="/rss.xml" class="flex items-center gap-2">
  <Icon name="lucide:rss" class="w-4 h-4" />
  Subscribe via RSS
</a>
```

---

Enjoy your enhanced blog! 🚀
