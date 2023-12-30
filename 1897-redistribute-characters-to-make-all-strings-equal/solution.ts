// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
// 1897-redistribute-characters-to-make-all-strings-equal

function makeEqual(words: string[]): boolean {
  const freq = {};
  for(const word of words) {
    for(const c of word) {
      freq[c] = (freq[c] ?? 0) + 1;
    }
  }
  for(const key of Object.keys(freq)) {
    if(freq[key] % words.length !== 0) {
      return false;
    }
  }
  return true;
};
