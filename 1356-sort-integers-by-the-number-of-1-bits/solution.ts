// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/submissions/1095506679/
// 1356-sort-integers-by-the-number-of-1-bits

function sortByBits(arr: number[]): number[] {
    arr.sort((a, b) => (countBits(a) - countBits(b) || (a - b)));
    return arr;
};

function countBits(n: number): number {
  let res = 0;
  while(n > 0) {
    n &= n - 1;
    res++;
  }
  return res;
}
