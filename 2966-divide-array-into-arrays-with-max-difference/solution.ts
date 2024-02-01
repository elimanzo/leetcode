// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/
// 2966-divide-array-into-arrays-with-max-difference
function divideArray(nums: number[], k: number): number[][] {
  nums.sort((a, b) => a - b);
  const res = [];
  for(let i = 2; i < nums.length; i+=3 ) {
    if(nums[i] - nums[i - 2] > k) {
      return [];
    }
    res.push([nums[i], nums[i - 1], nums[i - 2]]);
  }
  return res;
};
