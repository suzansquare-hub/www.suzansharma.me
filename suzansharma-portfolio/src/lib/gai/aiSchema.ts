export function generateAISchema(frontmatter: any, content: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': frontmatter.title,
    'description': frontmatter.description,
    'image': frontmatter.cover,
    'datePublished': frontmatter.date,
    'author': {
      '@type': 'Person',
      'name': 'Suzan Sharma',
      'url': 'https://www.suzansharma.me',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Tourism Growth Systems',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.suzansharma.me/images/logo.png',
      },
    },
    'mainEntity': {
      '@type': 'FAQPage',
      'mainEntity': generateStructuredAnswers(frontmatter.title, content).map(
        qa => ({
          '@type': 'Question',
          'name':  qa.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': qa.answer,
          },
        })
      ),
    },
  };
}