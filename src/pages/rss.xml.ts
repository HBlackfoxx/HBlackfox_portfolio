import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const imports = import.meta.glob('./blog/*.{md,mdx}', { eager: true });
  const posts = Object.entries(imports).map(([path, module]) => ({
    file: path,
    ...(module as any)
  }));

  const sortedPosts = posts
    .filter((post: any) => {
      const filename = post.file.split(/[/\\]/).pop();
      return !post.frontmatter.draft && !filename?.startsWith('_');
    })
    .sort((a: any, b: any) => {
      const dateA = new Date(a.frontmatter.publishDate);
      const dateB = new Date(b.frontmatter.publishDate);
      return dateB.getTime() - dateA.getTime();
    });

  return rss({
    title: 'Mohamed Boukri | Blog',
    description: 'Articles about AI, Blockchain, and Industrial Engineering',
    site: context.site || 'https://boukri.me',
    items: sortedPosts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: new Date(post.frontmatter.publishDate),
      link: post.url || `/blog/${post.file.split('/').pop()?.replace(/\.(mdx|md)$/, '')}`,
      categories: [
        ...(post.frontmatter.category ? [post.frontmatter.category] : []),
        ...(post.frontmatter.tags || [])
      ],
      author: 'Mohamed Boukri',
      content: post.compiledContent ? post.compiledContent() : post.frontmatter.description,
    })),
    customData: `<language>en-us</language>
    <copyright>© ${new Date().getFullYear()} Mohamed Boukri. All rights reserved.</copyright>
    <webMaster>contact@boukri.me (Mohamed Boukri)</webMaster>`,
  });
}
