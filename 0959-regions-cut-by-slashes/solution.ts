const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
]

function regionsBySlashes(grid: string[]): number {
  const r = grid.length;
  const c = grid[0].length;
  const r2 = 3 * r;
  const c2 = 3 * c;
  const grid2 = Array(c2).fill(null).map(() => Array(r2).fill(0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let [ci, cj] = [i * 3, j * 3];
      if (grid[i][j] === "/") {
        grid2[ci][cj + 2] = 1;
        grid2[ci + 1][cj + 1] = 1;
        grid2[ci + 2][cj] = 1;
      }
      if (grid[i][j] === "\\") {
        grid2[ci][cj] = 1;
        grid2[ci + 1][cj + 1] = 1;
        grid2[ci + 2][cj + 2] = 1;
      }
    }
  }

  const dfs = (i: number, j: number): void => {
    if(i < 0 || i >= r2 || j < 0 || j >= c2 || grid2[i][j] === 1) {
      return;
    }

    grid2[i][j] = 1;
    for(const [di, dj] of DIRS) {
      dfs(i + di, j + dj);
    }
  }

  let res = 0;
  for(let i = 0 ; i < r2; i++) {
    for(let j = 0; j < c2; j++) {
      if (grid2[i][j] === 1) {
        continue;
      }
      res++;
      dfs(i, j);
    }
  }

  return res;
};
