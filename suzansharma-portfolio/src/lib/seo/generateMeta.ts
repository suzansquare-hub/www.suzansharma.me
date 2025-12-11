export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  robotsIndex?: boolean;
  robotsFollow?: boolean;
}

export function generateMetaTags(meta: MetaTags): string {
  let tags = '';

  tags += `<title>${escapeHtml(meta.title)}</title>\n`;
  tags += `<meta name="description" content="${escapeHtml(meta.description)}" />\n`;

  if (meta.keywords && meta.keywords.length > 0) {
    tags += `<meta name="keywords" content="${escapeHtml(meta.keywords.join(', '))}" />\n`;
  }

  if (meta.author) {
    tags += `<meta name="author" content="${escapeHtml(meta.author)}" />\n`;
  }

  if (meta.robotsIndex !== undefined || meta.robotsFollow !== undefined) {
    const robotsContent = `${meta.robotsIndex !== false ? 'index' : 'noindex'}, ${meta.robotsFollow !== false ? 'follow' : 'nofollow'}`;
    tags += `<meta name="robots" content="${robotsContent}" />\n`;
  }

  return tags;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<':  '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, char => map[char]);
}