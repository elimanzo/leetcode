// https://leetcode.com/problems/find-the-array-concatenation-value/
// 2562-find-the-array-concatenation-value

// function findTheArrayConcVal(nums: number[]): number {
//   let lo = 0;
//   let hi = nums.length - 1;
//   let res = 0;
//   while (lo <= hi) {
//     res += lo === hi ? nums[lo++] : Number(`${nums[lo++]}${nums[hi--]}`);
//   }
//   return res;
// };

function findTheArrayConcVal(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;
  let res = 0;
  while (lo <= hi) {
    res += lo === hi ? nums[lo++] : concatNum(nums[lo++], nums[hi--]);
  }
  return res;
};

function concatNum(a: number, b: number): number {
  return a * 10 ** (1 + Math.floor(Math.log10(b))) + b;
}
