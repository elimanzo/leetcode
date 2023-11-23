// https://leetcode.com/problems/arithmetic-subarrays/
// 1630-arithmetic-subarrays

function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    const res = [];
    for(let i = 0; i < l.length; i++) {
      const subArray = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
      res.push(isArith(subArray));
    }
    return res;
};

function isArith(nums: number[]): boolean {
  const diff = nums[1] - nums[0];
  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i + 1] - nums[i] !== diff) {
      return false;
    }
  }
  return true;
}
