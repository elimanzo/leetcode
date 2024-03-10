// https://leetcode.com/problems/n-th-tribonacci-number/
// 1137-n-th-tribonacci-number

const cache = {0: 0, 1: 1, 2: 1}

function tribonacci(n: number): number {
  return cache[n] ?? (
    cache[n] = 
      tribonacci(n - 1) + 
      tribonacci(n - 2) + 
      tribonacci(n - 3)
  );
};
