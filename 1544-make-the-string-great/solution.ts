// https://leetcode.com/problems/make-the-string-great/
// 1544-make-the-string-great

function makeGood(s: string): string {
  for(let i = 1; i < s.length; i++) {
    const cur = s[i].charCodeAt(0);
    const prev = s[i - 1].charCodeAt(0);
    const casingDiff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    if(cur + casingDiff === prev || cur - casingDiff === prev) {
      s = s.slice(0, i - 1) + s.slice(i + 1);
      i = 0;
    }
  }
  return s;
};
