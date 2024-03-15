// https://leetcode.com/problems/binary-subarrays-with-sum/
// 0930-binary-subarrays-with-sum

function numSubarraysWithSum(nums: number[], goal: number): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  let res = 0;
  const prev = { 0: 1 };
  for (const num of nums) {
    res += prev[num - goal] ?? 0;
    prev[num] = (prev[num] ?? 0) + 1;
  }
  return res;
};

// function numSubarraysWithSum(nums: number[], goal: number): number {
//   const atMost = (goal: number): number => {
//     if (goal < 0) {
//       return 0;
//     }
//     let res = 0;
//     let l = 0;
//     for (let r = 0; r < nums.length; r++) {
//       goal -= nums[r];
//       while (goal < 0) {
//         goal += nums[l];
//         l++;
//       }
//       res += r - l + 1;
//     }
//     return res;
//   }
//   return atMost(goal) - atMost(goal - 1);
// };
