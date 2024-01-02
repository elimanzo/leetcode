// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions
// 2610-convert-an-array-into-a-2d-array-with-conditions

function findMatrix(nums: number[]): number[][] {
  const freq = new Array(nums.length + 1).fill(0);
  const res = [];
  for(const n of nums) {
    if(freq[n] >= res.length) {
      res.push([])
    }
    res[freq[n]].push(n);
    freq[n]++;
  }
  return res;
};
