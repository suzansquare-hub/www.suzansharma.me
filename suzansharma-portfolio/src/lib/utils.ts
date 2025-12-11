// ফরম্যাট ডেট
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// রিডিং টাইম ক্যালকুলেট
export function calculateReadingTime(content: string): number {
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / 200);
}

// স্লাগ জেনারেট করা
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// এক্সার্ট জেনারেট করা
export function generateExcerpt(content: string, length: number = 150): string {
  const plainText = content.replace(/[#*\-_`]/g, '').replace(/<[^>]*>/g, '');
  return plainText.substring(0, length) + '...';
}

// ক্যাপিটালাইজ
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ক্যাটাগরি ফর্ম্যাট (crypto → Crypto)
export function formatCategory(category: string): string {
  return category
    .split('-')
    .map(word => capitalize(word))
    .join(' ');
}