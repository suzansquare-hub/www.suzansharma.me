import { getAllBlogPosts } from '../blog/getPosts';

export function generateRSSFeed(): string {
  const posts = getAllBlogPosts();
  const baseUrl = 'https://www.suzansharma.me';

  const rssItems = posts
    .map(post => `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${baseUrl}/blog/${post.slug}</link>
        <guid>${baseUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description>${escapeXml(post.description)}</description>
        <author>contact@suzansharma.me (Suzan Sharma)</author>
        <category>${post.category}</category>
      </item>
    `)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Suzan Sharma - Tourism Growth Blog</title>
        <link>${baseUrl}</link>
        <description>AI-powered tourism growth strategies and insights</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItems}
      </channel>
    </rss>`;
}

function escapeXml(str: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"':  '&quot;',
    "'": '&apos;',
  };
  return str.replace(/[&<>"']/g, char => map[char]);
}