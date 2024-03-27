// https://leetcode.com/problems/subarray-product-less-than-k/
// 0713-subarray-product-less-than-k

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if(k <= 1) {
    return 0
  };
  let res = 0;
  let l = 0;
  let product = 1;
  for(let r = 0; r < nums.length; r++) {
    product *= nums[r];
    while(product >= k) {
      product /= nums[l];
      l++;
    }
    res += r - l + 1;
  }
  return res;
};
