export interface StructuredAnswer {
  question: string;
  answer:  string;
}

export function generateStructuredAnswers(
  title: string,
  content: string
): StructuredAnswer[] {
  const answers: StructuredAnswer[] = [];

  // ১. Title-based question
  answers.push({
    question: `What is ${title}?`,
    answer: getFirstParagraph(content),
  });

  // ২. How-to question
  answers.push({
    question: `How do I implement ${title}?`,
    answer: extractFirstSection(content, 'How'),
  });

  // ৩. Benefits question
  answers.push({
    question: `What are the benefits of ${title}?`,
    answer: extractFirstSection(content, 'Benefits'),
  });

  return answers;
}

function getFirstParagraph(content: string): string {
  const paragraphs = content.split('\n\n');
  return paragraphs[0].substring(0, 150) + '...';
}

function extractFirstSection(content: string, keyword: string): string {
  const regex = new RegExp(`## ${keyword}([^#]*)`);
  const match = content.match(regex);
  return match ? match[1].substring(0, 150) + '...' : 'See full post for details. ';
}