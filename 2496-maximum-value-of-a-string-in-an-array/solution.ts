// https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
// 2496-maximum-value-of-a-string-in-an-array

// function maximumValue(strs: string[]): number {
//   return Math.max(...strs.map((s) => !isNotNumber(s) ? Number(s) : s.length));
// };

// function isNotNumber(s: string): boolean {
//   return /\D/.test(s);
// }

// function maximumValue(strs: string[]): number {
//   return Math.max(...strs.map(s => isNumber(s) ? Number(s) : s.length));
// };

// function isNumber(s: string): boolean {
//   for (const c of s) {
//     if(!('0' <= c && c <= '9')) {
//       return false;
//     }
//   }
//   return true;
// }

function maximumValue(strs: string[]): number {
  return Math.max(...strs.map((s) => isNaN(Number(s)) ? s.length: Number(s)))
};
