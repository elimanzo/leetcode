// https://leetcode.com/problems/number-of-arithmetic-triplets/description/
// 2367-number-of-arithmetic-triplets

function arithmeticTriplets(nums: number[], diff: number): number {
    let res = 0;
    const set = new Set<number>(nums);
    for(let i = 0; i < nums.length; i++) {
      if(set.has(nums[i] + diff) && set.has(nums[i] + 2 * diff)) {
        res++;
      }
    }
    return res;
};
