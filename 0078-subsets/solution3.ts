// https://leetcode.com/problems/subsets/
// 0078-subsets

function subsets(nums: number[]): number[][] {
  const n = nums.length;

  const getSubsetOutOfInteger = (signature: number): number[] => {
    const subset = []
    for(let i = 0; i < n; i++) {
      if(signature & (1 << i)) {
        subset.push(nums[i]);
      }
    }
    return subset;
  }

  const res = [];

  for(let i = 0; i < 2 ** n; i++) {
    res.push(getSubsetOutOfInteger(i));
  }
  return res;
};

