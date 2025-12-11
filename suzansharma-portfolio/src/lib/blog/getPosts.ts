import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { generateAISummary, generateAIKeywords, generateAISchema } from '../gai';

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  readingTime: number;
  tags:  string[];
  cover?: string;
  aiSummary?: string;
  aiKeywords?: string[];
  aiSchema?: object;
}

// ✅ সব ব্লগ পোস্ট পড়া
export function getAllBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  const posts:  BlogPost[] = [];

  // সব ক্যাটাগরি ফোল্ডার খুঁজা
  const categories = fs.readdirSync(contentDir);

  categories.forEach(category => {
    const categoryPath = path.join(contentDir, category);
    const isDirectory = fs.statSync(categoryPath).isDirectory();

    if (! isDirectory) return;

    const files = fs.readdirSync(categoryPath);

    files.forEach(file => {
      if (! file.endsWith('.mdx')) return;

      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const post: BlogPost = {
        slug: file.replace('.mdx', ''),
        category,
        title: data.title,
        description: data.description,
        content,
        date:  data.date,
        author: data.author || 'Suzan Sharma',
        readingTime: Math.ceil(content.split(' ').length / 200),
        tags: data.tags || [],
        cover: data.cover,
        // ✅ GAI অপটিমাইজেশন
        aiSummary: generateAISummary(content),
        aiKeywords: generateAIKeywords(content, data.title),
        aiSchema: generateAISchema(data, content),
      };

      posts.push(post);
    });
  });

  // সর্বশেষ ফার্স্ট
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ✅ কেটাগরি অনুযায়ী পোস্ট
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => post.category === category);
}

// ✅ সিঙ্গেল পোস্ট
export function getPostBySlug(slug:  string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

// ✅ সার্চ ফাংশন
export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return getAllBlogPosts().filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// ✅ সব ক্যাটাগরি
export function getAllCategories(): string[] {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  return fs.readdirSync(contentDir).filter(item => {
    const itemPath = path.join(contentDir, item);
    return fs.statSync(itemPath).isDirectory();
  });
}