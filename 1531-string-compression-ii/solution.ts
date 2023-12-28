// https://leetcode.com/problems/string-compression-ii/
// 1531-string-compression-ii
// Top Down

function getLengthOfOptimalCompression(s: string, k: number): number {
  const cache = {};
  const count = (i: number, k: number, prev: string, prevCount: number): number => {
    const key = `${i} ${k} ${prev} ${prevCount}`;
    if(cache[key] != null) {
      return cache[key];
    }
    if(k < 0) {
      return Infinity;
    }
    if(s.length - i === k) { // s.length === i ?
      return 0;
    }
    let res = null;
    if(s[i] === prev) {
      const incr = [1, 9, 99].includes(prevCount) ? 1 : 0 
      res = incr + count(i + 1, k, prev, prevCount + 1);
    } else {
      res = Math.min(
        count(i + 1, k - 1, prev, prevCount), // delete s[i]
        1 + count(i + 1, k, s[i], 1), // don't delete s[i]
      );
    }
    cache[key] = res;
    return res;
  }
  return count(0, k, '', 0);
};
