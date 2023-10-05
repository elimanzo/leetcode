// https://leetcode.com/problems/max-consecutive-ones/
// 0485-max-consecutive-ones

function findMaxConsecutiveOnes(nums: number[]): number {
  let currMax = 0;
  let currCounter = 0;
  for(const n of nums) {
    currCounter = n === 1 ? currCounter + 1 : 0;
    currMax = Math.max(currMax, currCounter);
  }
  return currMax;
};

// function findMaxConsecutiveOnes(nums: number[]): number {
//   const onlyOnes = nums.join('').split(/0+/);
//   return Math.max(...onlyOnes.map((ones) => ones.length));
// };
