// https://leetcode.com/problems/k-inverse-pairs-array/
// 0629-k-inverse-pairs-array

const MOD = 10 ** 9 + 7;

function kInversePairs(n: number, k: number): number {
  let prev = new Array(k + 1).fill(0);
  prev[0]= 1;

  for (let N = 1; N < n + 1; N++) {
    const cur = Array(k + 1).fill(0);
    let total = 0;
    for (let K = 0; K < k + 1; K++) {
      if(K >= N) {
        total -= prev[K - N] - MOD;
      }
      total = (total + prev[K] + MOD) % MOD;
      cur[K] = total;
    }
    prev = cur;
  }

  return prev[k];
};
