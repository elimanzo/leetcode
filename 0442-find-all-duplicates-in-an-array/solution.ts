// https://leetcode.com/problems/find-all-duplicates-in-an-array/
// 0442-find-all-duplicates-in-an-array
function findDuplicates(nums: number[]): number[] {
  const res = [];
  for(let num of nums) {
    num = Math.abs(num);
    if(nums[num - 1] < 0) {
      res.push(num);
    }
    nums[num - 1] *= -1;
  }
  return res;
};
