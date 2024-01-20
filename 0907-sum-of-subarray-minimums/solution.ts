// https://leetcode.com/problems/sum-of-subarray-minimums/description/
// 0907-sum-of-subarray-minimums

const MOD = 10**9 + 7

function sumSubarrayMins(arr: number[]): number {
  const n = arr.length;
  const stack = [];
  const res = Array(n).fill(0);
  for(let i = 0; i < n; i++) {
    while(stack.length !== 0 && arr[stack.at(-1)] > arr[i]) {
      stack.pop();
    }
    
    const j = stack.at(-1) ?? -1;
    res[i] = res.at(j) + (i - j) * arr[i];
    stack.push(i);
  }

  return res.reduce((a, b) => a + b, 0) % MOD;
};
