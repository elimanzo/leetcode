// https://leetcode.com/problems/subsets/
// 0078-subsets

function subsets(nums: number[]): number[][] {
  return subsetFromIndex(nums, 0);
};

function subsetFromIndex(nums: number[], index: number) {
  if(nums.length === index) {
    return [[]];
  }

  const subsetExcludingIndex = subsetFromIndex(nums, index + 1);

  return subsetExcludingIndex.flatMap(subset => [subset, [...subset, nums[index]]]);
}

// function subsets(nums: number[]): number[][] {
//   let res = [[]];
//   for(const num of nums) {
//     res = res.flatMap(option => [option, [...option, num]]);
//   }
//   return res;
// };
