// https://leetcode.com/problems/next-greater-element-ii/description/
// 0503-next-greater-element-ii
function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const res = Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n * 2; i++) {
    const num = nums[i % n];
    while(stack.length !== 0 && nums[stack.at(-1)] < num) {
      res[stack.pop()] = num;
    }
    if(i < n) {
      stack.push(i);
    }
  }
  return res;
};
