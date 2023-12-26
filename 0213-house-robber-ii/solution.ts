// https://leetcode.com/problems/house-robber-ii/
// 0213-house-robber-ii
function rob(nums: number[]): number {
  const n = nums.length;
  if(n === 1) {
    return nums[0];
  }
  if(n === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const robStartInclusive = robHelper(nums, 0, nums.length - 1);
  const robStartExclusive = robHelper(nums, 1, nums.length);

  return Math.max(robStartInclusive, robStartExclusive);
};

function robHelper(nums: number[], start: number, end: number): number {
  const res = Array(end).fill(null);
  res[start] = nums[start];
  res[start + 1] = Math.max(nums[start], nums[start + 1]);

  for(let i = start + 2; i < end; i++) {
    res[i] = Math.max(res[i - 1], res[i - 2] + nums[i]);
  }

  return res[end - 1];
}
