// https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
// 2586-count-the-number-of-vowel-strings-in-range

const vowelSet = new Set('aeiou');

function vowelStrings(words: string[], left: number, right: number): number {
  let res = 0;
  for(let i = left; i <= right; i++) {
    if(isVowelString(words[i])) {
      res++;
    }
  }
  return res;
};

function isVowelString(s: string): boolean {
  return vowelSet.has(s[0]) && vowelSet.has(s.at(-1));
}

// function isVowelString(s) {
//   return /^[aeiou]/.test(s) && /[aeiou]$/.test(s);
// }

// function isVowelString(s: string): boolean {
//   return /^[aeiou].*[aeiou]$/.test(s) || /^[aeiou]$/.test(s);
// }
