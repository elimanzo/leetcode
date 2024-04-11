// https://leetcode.com/problems/remove-k-digits/description/
// 0402-remove-k-digits

function removeKdigits(num: string, k: number): string {
  const stack = [];
  for(const d of num) {
    while(k > 0 && stack.at(-1) > d) {
      stack.pop();
      k--;
    }
    if(stack.length === 0 && d === '0') {
      continue;
    }
    stack.push(d);
  }
  while(k > 0 && stack.length > 0) {
    stack.pop();
    k--;
  }
  return stack.length === 0 ? '0' : stack.join('');
};
