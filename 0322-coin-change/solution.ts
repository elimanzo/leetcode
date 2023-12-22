// https://leetcode.com/problems/coin-change/description/
// 0322-coin-change

function coinChange(coins: number[], amount: number,): number {
  const cache = {};
  return coinChangeWithCache(coins, amount, cache);
}
function coinChangeWithCache(
  coins: number[],
  amount: number,
  cache: Record<number, number>
): number {
  const cachedResult = cache[amount];

  if (cachedResult) {
    return cachedResult;
  }
  if (amount === 0) {
    cache[amount] = 0;
    return 0;
  }

  const options = [];
  for (const coin of coins) {
    if (coin <= amount) {
      const childResult = coinChangeWithCache(coins, amount - coin, cache);
      if (childResult < 0) {
        continue;
      }
      options.push(childResult);
    }
  }
  if (options.length === 0) {
    cache[amount] = -1;
    return -1;
  }
  let res =  Math.min(...options) + 1;
  cache[amount] = res;
  return res;

}
