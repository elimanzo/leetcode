// https://leetcode.com/problems/plus-one/
// 0066-plus-one

function plusOne(digits: number[]): number[] {
  return digits.join('')
    .replace(
      /([0-8]|^)(9*)$/, (...m) => 
      `${Number(m[1]) + 1}${'0'.repeat(m[2].length)}`)
    .split('')
    .map(Number);
};

// function plusOne(digits: number[]): number[] {
//   const n = digits.length;
//   digits[n - 1]++;
//   for(let i = n - 1; i > 0; i--) {
//     if(digits[i] <= 9) {
//       break;
//     }
//     digits[i] -= 10;
//     digits[i - 1]++;
//   }
//   if(digits[0] > 9) {
//     digits[0] -= 10;
//     digits.unshift(1);
//   }
//   return digits;
// };

// function plusOne(digits: number[]): number[] {
//   adding(digits, digits.length - 1);
//   return digits;
// };

// function adding(n: number[], index: number): void {
//   console.log(n, index)
//   if(index < 0) {
//     n.unshift(1);
//     return;
//   }
//   if(n[index] < 9) {
//     n[index]++;
//     return;
//   }
//   n[index] = 0;
//   adding(n, index - 1);
// }

// function plusOne(digits: number[]): number[] {
//   let res = BigInt(digits.join('')) + 1n;
//   return res.toString().split('').map(Number);
// };
