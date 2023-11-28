// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/
// 2147-number-of-ways-to-divide-a-long-corridor
const MOD = 10 ** 9 + 7;

function numberOfWays(corridor: string): number {
  const cache = [];
  for(let i = 0; i < corridor.length; i++) {
    cache.push(new Array(3).fill(-1));
  }
  const dfs = (i: number, seats: number = 0): number => {
    if(i === corridor.length) {
      return seats === 2 ? 1 : 0;
    }
    if(cache[i][seats] !== -1) {
      return cache[i][seats];
    }
    let res = 0;
    if(seats === 2) {
      res = corridor[i] === 'S' ? dfs(i + 1, 1) : (dfs(i + 1, 0) + dfs(i + 1, 2)) % MOD;
    } else {
      res = dfs(i + 1, corridor[i] === 'S' ? seats + 1 : seats);
    }
    cache[i][seats] = res;
    return res;
  }
  return dfs(0);
};
