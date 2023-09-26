// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
// 2710-remove-trailing-zeros-from-a-string

function removeTrailingZeros(num: string): string {
  const stack = num.split('');
  for(let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === '0') {
      stack.pop();
      continue;
    } 
    break;
  }
  return stack.join('');
};

// function removeTrailingZeros(num: string): string {
//   return num.replace(/0+$/,'');
// };
