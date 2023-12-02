// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/
// 1160-find-words-that-can-be-formed-by-characters

function countCharacters(words: string[], chars: string): number {
  let res = 0;
  const charFreq = getFreq(chars);
  for(const word of words) {
    let count = 0;
    const wordFreq = {};
    for(const c of word) {
      wordFreq[c] = (wordFreq[c] ?? 0) + 1;
      if(!charFreq[c] || wordFreq[c] > charFreq[c]) {
        count = 0;
        break;
      }
      count++;
    }
    res += count;
  }
  return res;
};

function getFreq(s: string): Record<string, number> {
  const freq = {};
  for(const c of s) {
    freq[c] = (freq[c] ?? 0) + 1;
  }
  return freq;
};

