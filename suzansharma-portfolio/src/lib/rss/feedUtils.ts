export function createFeedUrl(slug: string): string {
  return `https://www.suzansharma.me/blog/${slug}`;
}

export function formatFeedDate(date: string): string {
  return new Date(date).toUTCString();
}

export function truncateDescription(description: string, maxLength:  number = 200): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength) + '...';
}