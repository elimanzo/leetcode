// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty
// 2870-minimum-number-of-operations-to-make-array-empty

function minOperations(nums: number[]): number {
  const freq = _.countBy(nums);
  let res = 0;
  for(const key in freq) {
    const count = freq[key];
    if (count === 1) {
      return -1;
    }
    res += Math.ceil(count / 3);
  }
  return res;
};
