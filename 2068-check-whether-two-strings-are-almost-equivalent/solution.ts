// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
// 2068-check-whether-two-strings-are-almost-equivalent

function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const freq: Record<string, number> = {};
  for(const c of word1) {
    freq[c] = (freq[c] ?? 0) + 1;
  }
  for(const c of word2) {
    freq[c] = (freq[c] ?? 0) - 1;
  }
  return Object.values(freq).every(val => Math.abs(val) <= 3);
};

// function checkAlmostEquivalent(word1: string, word2: string): boolean {
//   const freq = Array(26).fill(0);
//   for (const c of word1) {
//     ++freq[getIndex(c)];
//   }
//   for (const c of word2) {
//     --freq[getIndex(c)];
//   }

//   return freq.every(val => Math.abs(val) <= 3);
// }

// function getIndex(c: string): number {
//   return c.charCodeAt(0) - 'a'.charCodeAt(0);
// }
