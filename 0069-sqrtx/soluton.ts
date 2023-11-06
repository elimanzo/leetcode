// https://leetcode.com/problems/sqrtx/
// 0069-sqrtx

function mySqrt(x: number): number {
  // lo ** 2 <= x < hi ** 2
  let lo = 0;
  let hi = x + 1;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(mid ** 2 <= x) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
};
