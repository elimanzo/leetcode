// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// 1249-minimum-remove-to-make-valid-parentheses

function minRemoveToMakeValid(s: string): string {
  let count = 0;
  const res = [];
  for(const c of s) {
    if(c === '(') {
      count++;
    }
    if(c === ')') {
      count--;
    }
    if(count < 0) {
      count = 0;
      continue;
    }
    res.push(c);
  }

  const filteredRes = [];
  for(const c of res.reverse()) {
    if(c === '(' && count > 0) {
      count--;
      continue;
    }
    filteredRes.push(c);
  }

  return filteredRes.reverse().join('');
};

