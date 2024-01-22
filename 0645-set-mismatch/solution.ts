// https://leetcode.com/problems/set-mismatch/submissions/1153169613/
// 0645-set-mismatch

function findErrorNums(nums: number[]): number[] {
  const freq = Array(nums.length + 1).fill(0);
  for(const num of nums) {
    freq[num]++;
  }
  return [freq.indexOf(2), freq.lastIndexOf(0)];
};
