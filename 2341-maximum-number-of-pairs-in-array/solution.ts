// https://leetcode.com/problems/maximum-number-of-pairs-in-array/submissions/
// 2341-maximum-number-of-pairs-in-array

// function numberOfPairs(nums: number[]): number[] {
//   const freq: Set<number> = new Set();
//   let pairs = 0;
//   for (const n of nums) {
//     if(freq.has(n)) {
//       freq.delete(n);
//       pairs++;
//       continue;
//     }
//     freq.add(n);
//   }
  
//   return [pairs, freq.size];
// };

function numberOfPairs(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  let pairs = 0;
  const len = nums.length;
  while (nums.length > 0) {
    const pop = nums.pop();
    if(pop === nums[nums.length - 1]) {
      nums.pop();
      pairs++;
    }
  }
  
  return [pairs, len - pairs * 2];
};
