export default function capitalizeLetter(sentence: string): string {
  return sentence
    .split(' ')                // Split the sentence into words
    .map(word =>               // Map over each word
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  // Capitalize the first letter and make the rest lowercase
    )
    .join(' ');                // Join the words back into a sentence
};