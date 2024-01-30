// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// 0150-evaluate-reverse-polish-notation

const OPERATIONS = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => b - a,
  '/': (a: number, b: number) => Math.trunc(b / a),
  '*': (a: number, b: number) => a * b,
}

function evalRPN(tokens: string[]): number {
  const stack = [];
  for(const token of tokens) {
    if(OPERATIONS[token] != null) {
      stack.push(OPERATIONS[token](stack.pop(), stack.pop()));
      continue;
    }
    stack.push(+token);
  }
  return stack.pop();
};
