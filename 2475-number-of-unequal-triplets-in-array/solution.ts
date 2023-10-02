// https://leetcode.com/problems/number-of-unequal-triplets-in-array/description/
// 2475-number-of-unequal-triplets-in-array

function unequalTriplets(nums: number[]): number {
  const n = nums.length;
  let res = n * (n - 1) * (n - 2) / 6;
  const freq: Record<number, number> = {};
  for(const num of nums) {
    freq[num] = (freq[num] ?? 0) + 1;
  }

  for(const val of Object.values(freq)) {
    res -= val * (val - 1) * (val - 2) / 6;
    res -= val * (val - 1) / 2 * (n - val);
  }
  return res;
};

// function unequalTriplets(nums: number[]): number {
//   const freq = {};
//   for(const n of nums) {
//     freq[n] = (freq[n] ?? 0) + 1;
//   }

//   let res = 0;
//   const n = nums.length;
//   for(let i = 0; i < n; i++) {
//     for(let j = i + 1; j < n; j++) {
//       if(nums[i] === nums[j]) {
//         continue;
//       }
//       res += n - (freq[nums[i]] + freq[nums[j]]);
//     }
//   }
//   return res / 3;
// };

// function unequalTriplets(nums: number[]): number {
//   let res = 0;
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       for(let k = j + 1; k < nums.length; k++) {
//         if(nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
//           res++;
//         }
//       }
//     }
//   }
//   return res;
// };
