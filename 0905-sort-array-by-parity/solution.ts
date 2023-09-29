// https://leetcode.com/problems/sort-array-by-parity/description/
// 0905-sort-array-by-parity
function sortArrayByParity(nums: number[]): number[] {
  let pivot = 0;
  let cur = 0;

  while(cur < nums.length) {
    if(nums[cur] % 2 !== 0) {
      cur++;
      continue;
    } 
    [nums[cur], nums[pivot]] = [nums[pivot], nums[cur]];
    pivot++;
    cur++;
  }

  return nums;
};

// function sortArrayByParity(nums: number[]): number[] {
//   nums.sort((a, b) => (a % 2) - (b % 2));
//   return nums;
// };

// function sortArrayByParity(nums: number[]): number[] {
//   let lo = 0;
//   let hi = nums.length - 1;
//   while (lo < hi) {
//     if(nums[hi] % 2 !== 0) {
//       hi--;
//       continue;
//     }
//     if(nums[lo] % 2 === 0) {
//       lo++;
//       continue;
//     }
//     [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
//     lo++;
//     hi--;
//   }
//   return nums;
// };

// function sortArrayByParity(nums: number[]): number[] {
//   const evens = [];
//   const odds = [];
//   for(const n of nums) {
//     if(n % 2 === 0) {
//       evens.push(n);
//       continue;
//     }
//     odds.push(n);
//   }
//   return [...evens, ...odds];
// };
