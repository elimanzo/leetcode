// https://leetcode.com/problems/out-of-boundary-paths/description/
// 0576-out-of-boundary-paths

const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
]

const MOD = 10**9 + 7;

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  // O(m * n * maxMoves)
  const r = m;
  const c = n;
  const cache = {};

  const dfs = (i: number, j: number, moves: number): number => {
    if(i < 0 || i >= r || j < 0 || j >= c) {
      return 1;
    }
    if(moves === 0) {
      return 0;
    }
    const key = `${i} ${j} ${moves}`;
    if(cache[key] != null) {
      return cache[key];
    }
    let res = 0;
    for(const [di, dj] of DIR) {
      res += dfs(di + i, dj + j, moves - 1);
    }
    return cache[key] = res % MOD;
  }
    
  return dfs(startRow, startColumn, maxMove);
  
};
