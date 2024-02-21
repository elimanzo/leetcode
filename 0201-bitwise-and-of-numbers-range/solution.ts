// https://leetcode.com/problems/bitwise-and-of-numbers-range/
// 0201-bitwise-and-of-numbers-range

function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;
  while(left !== right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};
