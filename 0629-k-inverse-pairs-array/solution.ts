// https://leetcode.com/problems/k-inverse-pairs-array/
// 0629-k-inverse-pairs-arra

const MOD = 10**9 + 7;

function kInversePairs(n: number, k: number): number {
  let prev = Array(k + 1).fill(0);
  prev[0] = 1;

  for(let i = 1; i < n + 1; i++) {
    const cur = Array(k + 1).fill(0);
    let total = 0;
    for(let j = 0; j < k + 1; j++) {
      if(j >= i) {
        total -= prev[i - j]
      }
      total = (total + prev[j]) % MOD;
      cur[j] = total;
    }
    prev = cur;
  }
  return prev[k];
};
