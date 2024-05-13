function largestLocal(grid: number[][]): number[][] {
  const r = grid.length;
  const c = grid[0].length;

  const res = Array(r - 2).fill(null).map(() => Array(c - 2).fill(0));

  for(let i = 1 ; i < r - 1; i++) {
    for(let j = 1 ; j < c - 1; j++) {
      res[i - 1][j - 1] = localMax(grid, i, j);
    }
  }
  return res;
};

function localMax(grid: number[][], ci: number, cj: number): number {
  let res = 0;
  for(let i = ci - 1; i <= ci + 1; i++) {
    for(let j = cj - 1; j <= cj + 1; j++) {
      res = Math.max(res, grid[i][j] ?? 0);
    }
  }
  return res;
}
