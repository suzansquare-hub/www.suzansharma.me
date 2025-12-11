export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Suzan Sharma',
    'url': 'https://www.suzansharma.me',
    'jobTitle': 'Tourism Growth Systems Specialist',
    'email': 'contact@suzansharma.me',
    'telephone': '+880177048255',
    'sameAs': [
      'https://linkedin.com/in/suzan-sharma-303832178',
      'https://github.com/deepthoughtsuzan',
      'https://upwork.com/freelancers/~suzan',
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Dhaka',
      'addressCountry': 'Bangladesh',
    },
    'knows About': [
      'Tourism Marketing',
      'SEO',
      'GEO (Generative Engine Optimization)',
      'AI Automation',
      'Hotel Growth Systems',
      'Cruise Marketing',
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Tourism Growth Systems',
    'url': 'https://www.suzansharma.me',
    'logo': 'https://www.suzansharma.me/images/logo.png',
    'description': 'AI-powered growth systems for tourism brands',
    'founder': {
      '@type': 'Person',
      'name': 'Suzan Sharma',
    },
    'sameAs': [
      'https://linkedin.com/in/suzan-sharma-303832178',
      'https://github.com/deepthoughtsuzan',
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':  'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}