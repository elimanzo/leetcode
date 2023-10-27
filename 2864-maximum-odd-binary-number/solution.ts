// https://leetcode.com/problems/maximum-odd-binary-number/description/
// 2864-maximum-odd-binary-number

function maximumOddBinaryNumber(s: string): string {
  const onlyOnes = s.replace(/0/g, '');
  const onlyZeros = s.replace(/1/g, '');
  const res = onlyOnes.replace(/1$/g, onlyZeros + '1');
  return res;
};

// function maximumOddBinaryNumber(s: string): string {
//   const digs = [...s].sort();
//   digs.reverse();
//   digs.push(digs.shift());
//   return digs.join('');
// }

// function maximumOddBinaryNumber(s: string): string {
//   const freq: Record<number, number> = {};
//   for(const c of s) {
//     freq[c] = (freq[c] ?? 0) + 1;
//   }
//   return ['1'.repeat(freq[1] - 1), '0'.repeat(freq[0]), '1'].join('');
// };
