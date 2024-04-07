// https://leetcode.com/problems/valid-parenthesis-string/description/
// 0678-valid-parenthesis-string

function checkValidString(s: string): boolean {
  let max = 0;
  let min = 0;
  for(const c of s) {
    if(c === '(') {
      max++;
      min++;
    }
    if(c === ')') {
      max--;
      min--;
    }
    if(c === '*') {
      max++;
      min--;
    }
    if(max < 0) {
      return false;
    }
    min = Math.max(min, 0);
  }
  return min === 0;
};
