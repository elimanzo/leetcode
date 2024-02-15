// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/
// 2971-find-polygon-with-the-largest-perimeter

function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let res = -1;
  let total = 0;

  for(const n of nums) {
    if(total > n) {
      res = n + total;
    }
    total += n;
  }
  return res;
};
