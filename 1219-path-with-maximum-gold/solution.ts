const DIR = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]

function getMaximumGold(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;

  const dfs = (i: number, j: number) => {
    if(i < 0 || i >= r || j < 0 || j >= c || grid[i][j] === 0) {
      return 0;
    } 
    const currentGold = grid[i][j];
    grid[i][j] = 0;
    let res = 0;
    for(const [di, dj] of DIR) {
      res = Math.max(res, dfs(i + di, j + dj));
    }
    grid[i][j] = currentGold;
    return currentGold + res;
  }

  let res = 0;
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === 0) {
        continue;
      }
      res = Math.max(res, dfs(i, j));
    }
  }
  return res;
};
