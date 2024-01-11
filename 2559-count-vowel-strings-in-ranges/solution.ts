// https://leetcode.com/problems/count-vowel-strings-in-ranges/
// 2559-count-vowel-strings-in-ranges
const VOWEL = new Set<string>('aeiou');

function vowelStrings(words: string[], queries: number[][]): number[] {
  const n = words.length;
  const arrCount = words.map(doesWordStartAndEndWithVowel);
  for(let i = 1; i < n; i++) {
    arrCount[i] += arrCount[i - 1]; 
  }
  
  return queries.map(([left, right]) => arrCount[right] - (arrCount[left - 1] ?? 0));
};

function doesWordStartAndEndWithVowel(word: string): number {
  return VOWEL.has(word[0]) && VOWEL.has(word[word.length - 1]) ? 1 : 0;
}
