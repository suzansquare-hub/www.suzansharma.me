// ✅ Automatic Summary জেনারেশন (কোনো API প্রয়োজন নেই)
export function generateAISummary(content: string): string {
  // HTML tags রিমুভ করা
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*\-_`]/g, '');

  // প্রথম ৩টি সেন্টেন্স নেওয়া
  const sentences = cleanContent
    .split('. ')
    .slice(0, 3)
    .join('. ');

  return sentences.length > 150 ? sentences :  content.substring(0, 150);
}

// ✅ উদাহরণ আউটপুট
// Input: "Tourism SEO is the process of optimizing your hotel website..."
// Output: "Tourism SEO is the process of optimizing your hotel website.  This includes keyword research and content optimization.  It helps your business rank higher."