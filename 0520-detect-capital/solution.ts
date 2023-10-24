// https://leetcode.com/problems/detect-capital/
// 0520-detect-capital

function detectCapitalUse(word: string): boolean {
  return /^(?:[A-Z]*|[a-z]*|[A-Z][a-z]*)$/.test(word);
};

// function detectCapitalUse(word: string): boolean {
//   return isAllCapsOrLowers(word) || isFirstCap(word);
// };

// function isAllCapsOrLowers(word: string): boolean {
//   return word === word.toUpperCase() || word === word.toLowerCase();
// }

// function isFirstCap(word: string): boolean {
//   return word === word[0].toUpperCase() + word.slice(1).toLowerCase();
// }
