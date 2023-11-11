// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// 1684-count-the-number-of-consistent-strings

function countConsistentStrings(allowed: string, words: string[]): number {
  const setA = new Set(allowed);
  const isAllowed = (s: string): boolean  => {
    for(const c of s) {
      if(!setA.has(c)) {
        return false;
      }
    }
    return true;
  }
  
  let res = 0;
  for(const word of words) {
    if(isAllowed(word)) {
      res++;
    }
  }
  return res;
};

