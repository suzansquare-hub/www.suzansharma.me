export interface OGTags {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'blog';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export function generateOpenGraphTags(og: OGTags): string {
  let tags = '';

  tags += `<meta property="og:title" content="${escapeHtml(og.title)}" />\n`;
  tags += `<meta property="og:description" content="${escapeHtml(og.description)}" />\n`;
  tags += `<meta property="og:url" content="${og.url}" />\n`;
  tags += `<meta property="og:type" content="${og.type || 'website'}" />\n`;

  if (og.image) {
    tags += `<meta property="og:image" content="${og.image}" />\n`;
    tags += `<meta property="og:image:width" content="1200" />\n`;
    tags += `<meta property="og:image:height" content="630" />\n`;
  }

  if (og.author) {
    tags += `<meta property="article:author" content="${escapeHtml(og.author)}" />\n`;
  }

  if (og.publishedDate) {
    tags += `<meta property="article:published_time" content="${og.publishedDate}" />\n`;
  }

  if (og.modifiedDate) {
    tags += `<meta property="article:modified_time" content="${og.modifiedDate}" />\n`;
  }

  // Twitter Card
  tags += `<meta name="twitter:card" content="summary_large_image" />\n`;
  tags += `<meta name="twitter:title" content="${escapeHtml(og.title)}" />\n`;
  tags += `<meta name="twitter:description" content="${escapeHtml(og.description)}" />\n`;
  if (og.image) {
    tags += `<meta name="twitter:image" content="${og.image}" />\n`;
  }

  return tags;
}

function escapeHtml(text:  string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, char => map[char]);
}