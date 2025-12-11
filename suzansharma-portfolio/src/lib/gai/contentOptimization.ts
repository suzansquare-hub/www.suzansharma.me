export interface ContentMetrics {
  wordCount: number;
  readingTime: number;
  headingCount: number;
  listCount: number;
  hasStructuredData: boolean;
  hasImages: boolean;
  score: number; // 0-100
}

export function analyzeContent(content: string): ContentMetrics {
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  const headingCount = (content.match(/^#+/gm) || []).length;
  const listCount = (content.match(/^[\*\-\+]\s/gm) || []).length;
  const hasStructuredData = content.includes('```');
  const hasImages = content.includes('![');

  // ✅ SEO Score
  let score = 50;
  if (wordCount > 1000) score += 10;
  if (headingCount > 3) score += 10;
  if (listCount > 2) score += 10;
  if (hasImages) score += 10;
  if (hasStructuredData) score += 10;

  return {
    wordCount,
    readingTime,
    headingCount,
    listCount,
    hasStructuredData,
    hasImages,
    score:  Math.min(score, 100),
  };
}