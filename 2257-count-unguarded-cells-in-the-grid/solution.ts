const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],

]

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  const r = m;
  const c = n;
  const grid = Array(r).fill(null).map(() => Array(c).fill(0));

  for (const [x, y] of guards) {
    grid[x][y] = 1;
  }

  for (const [x, y] of walls) {
    grid[x][y] = 2;
  }

  for (const [i, j] of guards) {
    for (const [di, dj] of DIRS) {
      let [ni, nj] = [i + di, j + dj];
      while (
        ni >= 0 && ni < r && nj >= 0 && nj < c &&
        grid[ni][nj] !== 2 && grid[ni][nj] !== 1
      ) {
        grid[ni][nj] = 3; // Mark cells as guarded with 3
        ni += di;
        nj += dj;
      }
    }
  }

  let res = 0;
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      if (grid[i][j] !== 0) {
        continue;
      }
      ++res;
    }
  }
  return res;
};
