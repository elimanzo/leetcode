// https://leetcode.com/problems/number-of-different-integers-in-a-string/description/
// 1805-number-of-different-integers-in-a-string

function numDifferentIntegers(word: string): number {
  const numbers = word.replaceAll(/\D+/g,' ').trim().replaceAll(/(?<!\d)0+(?=\d)/g, '');
  return numbers === '' ? 0 : uniqueCount(numbers.split(' '));
};
function uniqueCount<T>(arr: readonly T[]): number {
  return new Set(arr).size;
}
// function numDifferentIntegers(word: string): number {
//   const numbers = word.replace(/[a-z]+/g, ' ');
//   if(numbers === ' ') {
//     return 0;
//   }
//   return new Set(numbers.trim().split(' ').map(BigInt)).size;
// };

