// https://leetcode.com/problems/generate-parentheses/
// 0022-generate-parentheses

function generateParenthesis(n: number): string[] {
  const stack = [];
  const res = [];

  const backtrack = (open: number, closed: number) => {
    if(open === n && closed === n) {
      res.push(stack.join(''));
    }

    if(open < n) {
      stack.push('(');
      backtrack(open + 1, closed);
      stack.pop();
    }
    if(closed < open) {
      stack.push(')');
      backtrack(open, closed + 1);
      stack.pop();
    }
  }
  backtrack(0, 0);
  return res;
};
