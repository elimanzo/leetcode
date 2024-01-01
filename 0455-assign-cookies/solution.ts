// https://leetcode.com/problems/assign-cookies/
// 0455-assign-cookies

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let ci = 0;
  while(ci < s.length && res < g.length) {
    if(s[ci] >= g[res]) {
      res++;
    }
    ci++;
  }
  return res;
};
