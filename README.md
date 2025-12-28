# Mohamed Boukri - Portfolio Website

> Personal portfolio and blog showcasing expertise in Industrial Engineering, AI, and Blockchain technology.

🌐 **Live Site:** [boukri.me](https://boukri.me)

---

## 📋 Overview

A modern, performant portfolio website built with Astro, featuring a blog, project showcase, and professional resume. Optimized for SEO, accessibility, and GDPR compliance.

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Automatic theme switching with user preference persistence
- **Smooth Animations** - Framer Motion for engaging interactions
- **Modern UI Components** - Built with shadcn/ui and Radix UI

### 📝 Blog System
- **MDX Support** - Write blog posts with React components
- **Syntax Highlighting** - Code blocks with Shiki (one-dark-pro theme)
- **Category & Tag Archives** - Organized content discovery
- **Reading Time Estimates** - Automatic calculation
- **Related Posts** - Smart content recommendations
- **RSS Feed** - Subscribe to updates
- **Print-Friendly** - Optimized print stylesheets

### 🔍 SEO & Performance
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Structured Data** - JSON-LD schema for Person and BlogPosting
- **Sitemap Generation** - Automatic XML sitemap
- **Static Site Generation** - Fast page loads with Astro
- **Image Optimization** - Responsive images with lazy loading
- **CDN Ready** - Cloudflare integration with caching headers

### 🔒 Privacy & Compliance
- **GDPR Compliant** - Cookie consent banner
- **Privacy Policy** - Comprehensive privacy documentation
- **Conditional Analytics** - Google Analytics loads only with user consent
- **Secure Headers** - X-Frame-Options, CSP, and more

### 🚀 Deployment
- **Docker Support** - Multi-stage build with Nginx
- **Static Hosting** - Optimized for CDN deployment
- **Gzip Compression** - Reduced bandwidth usage
- **Cache Control** - Efficient asset caching

## 🛠 Technologies Used

### Core
- **[Astro](https://astro.build/)** - Fast, content-focused web framework
- **[React](https://reactjs.org/)** - Interactive UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Content & SEO
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[astro-seo](https://github.com/jonasmerlin/astro-seo)** - SEO component
- **[Shiki](https://shiki.matsu.io/)** - Syntax highlighting

### Deployment
- **[Docker](https://www.docker.com/)** - Containerization
- **[Nginx](https://nginx.org/)** - Web server
- **[Cloudflare](https://www.cloudflare.com/)** - CDN and DNS

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HBlackfoxx/HBlackfox_portfolio.git
   cd HBlackfox_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Add your Google Analytics ID:
   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build & Deploy

### Local Build
```bash
npm run build
npm run preview
```

### Docker Build
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

### Production Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Coolify with Cloudflare CDN.

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── blog/           # Blog images
│   ├── favicon.svg     # Site favicon
│   ├── og-image.png    # Open Graph image
│   └── manifest.json   # PWA manifest
├── src/
│   ├── components/     # React & Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes & pages
│   │   ├── blog/      # Blog posts (MDX)
│   │   └── projects/  # Project pages
│   ├── styles/         # Global styles
│   └── imgs/          # Image assets
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx configuration
└── astro.config.mjs    # Astro configuration
```

## 🎯 Key Pages

- **`/`** - Homepage with hero, skills, experience, and projects
- **`/blog`** - Blog index with filtering and search
- **`/blog/[slug]`** - Individual blog posts
- **`/blog/category/[category]`** - Category archives
- **`/blog/tag/[tag]`** - Tag archives
- **`/blog/archive`** - Timeline view of all posts
- **`/privacy`** - Privacy policy and GDPR information
- **`/rss.xml`** - RSS feed

## 🔧 Configuration

### Google Analytics
Add your measurement ID to `.env`:
```env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Site Metadata
Update in `src/layouts/Layout.astro`:
- Site title
- Description
- Social media links
- Author information

### Theme Colors
Customize in `src/styles/globals.css`:
- Light/dark mode colors
- Primary accent colors
- Typography settings

## 📝 Writing Blog Posts

Create a new `.mdx` file in `src/pages/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
publishDate: "2025-01-26"
category: "AI"
tags: ["machine-learning", "python"]
heroImage: "/blog/images/your-image.jpg"
readingTime: "5 min"
featured: true
draft: false
---

Your content here...
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed Boukri**
- Website: [boukri.me](https://boukri.me)
- LinkedIn: [mohamed-boukri](https://www.linkedin.com/in/mohamed-boukri-427b37189/)
- GitHub: [@HBlackfoxx](https://github.com/HBlackfoxx)
- Email: contact@boukri.me

---

Built with ❤️ using Astro and modern web technologies.
