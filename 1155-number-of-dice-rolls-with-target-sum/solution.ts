// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/
// 1155-number-of-dice-rolls-with-target-sum

const MOD = 10**9 + 7;

function numRollsToTarget(n: number, k: number, target: number): number {
  let dp = Array(target + 1).fill(null);
  dp[0] = 1;
  
  for(let dice = 0; dice < n; dice++) {
    const nextDP = Array(target + 1).fill(null);
    for(let val = 1; val <= k; val++) {
      for(let total = val; total < target + 1; total++) {
        nextDP[total] = (nextDP[total] + dp[total - val]) % MOD;
      }
    }
    dp = nextDP;
  }
  return dp[target];
};
