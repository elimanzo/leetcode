// https://leetcode.com/problems/remove-element/
// 0027-remove-element

function removeElement(nums: number[], val: number): number {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
