// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
// 1437-check-if-all-1s-are-at-least-length-k-places-away

function kLengthApart(nums: number[], k: number): boolean {
  let reg = new RegExp(`10{0,${k - 1}}1`);
  return !reg.test(nums.join(''));
};

// function kLengthApart(nums: number[], k: number): boolean {
//   let prevIndex = null;
//   for(const index of getIndex(nums)) {
//     if(prevIndex != null && index - prevIndex <= k) {
//       return false;
//     }
//     prevIndex = index;
//   }
//   return true;
// };

// function* getIndex(nums: number[]): Generator<number> {
//   for(let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       yield i;
//     }
//   }
// }
