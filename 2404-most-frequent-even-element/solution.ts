// https://leetcode.com/problems/most-frequent-even-element/
// 2404-most-frequent-even-element

function mostFrequentEven(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let res = -1;
  let resCount = 0;
  let cur = -1;
  let curCount = 0;
  for(const num of nums) {
    if(num % 2 !== 0){
      continue;
    }
    curCount = num === cur ? curCount + 1: 1;
    cur = num;
    if(curCount > resCount) {
      res = cur;
      resCount = curCount;
    }
  }
  return res;
};

// function mostFrequentEven(nums: number[]): number {
//   let res = -1;
//   let resCount = 0;
//   for(const num of nums) {
//     if(num % 2 !== 0){
//       continue;
//     }
//     const counter = nums.filter((counterNum) => counterNum === num).length;
//     if(
//       counter > resCount || 
//       (counter === resCount && num < res)
//     ) {
//       res = num;
//       resCount = counter;
//     }
//   }
//   return res;
// };

// function mostFrequentEven(nums: number[]): number {
//   const freq = new Map();
//   let res = -1;
//   for(const num of nums) {
//     if(num % 2 === 0) {
//       freq.set(num, (freq.get(num) ?? 0) + 1);
//     }
//   }
//   let resCount = 0;
//   for(const [key, count] of freq) {
//     if(count >= resCount) {
//       res = count === resCount ? Math.min(res, key) : key;
//       resCount = count;
//     }
//   }
//   return res;
// };
