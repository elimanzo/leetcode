// https://leetcode.com/problems/max-area-of-island/description/
// 0695-max-area-of-island

const DELTA = [
  [1, 0],
  [0, 1], 
  [0, -1], 
  [-1, 0]
  // Diagonals
  // [1, 1]
  // [1, -1]
  // [-1, 1]
  // [-1, -1]
];

function maxAreaOfIsland(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;
  let maxArea = 0;

  const dfs = (i: number, j: number) => {
    if (0 <= i && i < r && 0 <= j && j < c && grid[i][j] === 1) {
      grid[i][j] = 0;
      let res = 1;
      for (const [di, dj] of DELTA) {
        const ni = i + di;
        const nj = j + dj;
        res += dfs(ni, nj);
      }
      return res;
    } else {
      return 0;
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }
  return maxArea;
};