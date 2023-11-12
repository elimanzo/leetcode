// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// 1832-check-if-the-sentence-is-pangram

function checkIfPangram(sentence: string): boolean {
  return new Set(sentence).size === 26;
};
