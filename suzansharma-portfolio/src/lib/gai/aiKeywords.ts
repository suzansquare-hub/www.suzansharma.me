export function generateAIKeywords(content: string, title: string): string[] {
  const keywords:  string[] = [];

  // ১. Title থেকে কীওয়ার্ড
  keywords.push(title.toLowerCase());

  // ২. Common tourism keywords
  const tourismKeywords = [
    'tourism',
    'hospitality',
    'travel',
    'booking',
    'hotel',
    'resort',
    'SEO',
    'GEO',
  ];
  tourismKeywords.forEach(keyword => {
    if (content.toLowerCase().includes(keyword)) {
      keywords.push(keyword);
    }
  });

  // ৩. LSI Keywords (Semantic Related)
  const lsiMappings:  Record<string, string[]> = {
    hotel: ['accommodation', 'lodging', 'resort', 'stay'],
    seo: ['search optimization', 'organic traffic', 'ranking'],
    booking: ['reservation', 'checkout', 'conversion'],
    tourism: ['travel', 'destination', 'visitor'],
  };

  Object.entries(lsiMappings).forEach(([keyword, variations]) => {
    if (content.toLowerCase().includes(keyword)) {
      keywords.push(...variations);
    }
  });

  // ৪. First 5 unique keywords
  return [... new Set(keywords)].slice(0, 5);
}