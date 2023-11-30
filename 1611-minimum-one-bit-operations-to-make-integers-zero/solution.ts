// https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/
// 1611-minimum-one-bit-operations-to-make-integers-zero

function minimumOneBitOperations(n: number): number {
  if (n === 0) {
    return 0;
  }
  let k = 0;
  while (2 ** k <= n) {
    k++;
  }
  k--;
  return 2 ** (k + 1) - 1 - minimumOneBitOperations((2**k) ^ n);
};
