// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// 1614-maximum-nesting-depth-of-the-parentheses

function maxDepth(s: string): number {
  let res = 0;
  let open = 0;
  for(const c of s) {
    if(c === "(") {
      open++;
    }
    if(open > 0 && c === ')') {
      open--;
    }
    res = Math.max(res, open);
  }
  return res;
};
