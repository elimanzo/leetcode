// https://leetcode.com/problems/single-number/description/
// 0136-single-number

function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b);
};

// function singleNumber(nums: number[]): number {
//   let res = 0;
//   for(const num of nums) {
//     res ^= num;
//   }
//   return res;
// };

// function singleNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);
  
//   let res = 0;
//   let prev = null;
//   for(const num of nums) {
//     res = num === prev ? res -= num : res += num;
//     prev = num;
//   }

//   return res;
// };

// function singleNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);
  
//   for(let i = 0; i < nums.length; i++) {
//     const prev = nums[i - 1];
//     const cur = nums[i];
//     const next = nums[i + 1];
//     if(prev !== cur && cur !== next) {
//       return cur;
//     }
//   }

//   return -1;
// };

// function singleNumber(nums: number[]): number {
//   const freq: Record<number, number> = {};
//   for(const n of nums) {
//     freq[n] = (freq[n] ?? 0) + 1;
//   }

//   for(const key of Object.keys(freq)) {
//     if(freq[key] === 1) {
//       return Number(key);
//     }
//   }

//   return -1;
// };
