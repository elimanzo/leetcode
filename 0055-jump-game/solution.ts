// https://leetcode.com/problems/jump-game/
// 0055-jump-game

function canJump(nums: number[]): boolean {
  const n = nums.length;
  let canIReach = 0;

  for(let i = 0; i < n && i <= canIReach; i++) {
    const reach = nums[i];
    canIReach = Math.max(canIReach, reach + i);
  }
  return canIReach >= n - 1;
};
