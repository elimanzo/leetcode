// https://leetcode.com/problems/find-the-duplicate-number/
// 0287-find-the-duplicate-number
function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = getIntersection(nums);
  while(slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

function getIntersection(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  while(fast < nums.length) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if(slow === fast) {
      return slow;
    }
  }
}
