// https://leetcode.com/problems/number-of-closed-islands/
// 1254-number-of-closed-islands

const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1]
];

function closedIsland(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;

  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] === 1 ) {
      return;
    }

    grid[i][j] = 1;
    for(let [di, dj] of DIR) {
      dfs(i + di, j + dj);
    }
  }

  for(let j = 0; j < c; j++) {
    dfs(0, j);
    dfs(r - 1, j);
  }

  for(let i = 0; i < r; i++) {
    dfs(i, 0);
    dfs(i, c - 1);
  }

  let res = 0;
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === 0) {
        res++;
        dfs(i, j);
      }
    }
  }

  return res;
};
