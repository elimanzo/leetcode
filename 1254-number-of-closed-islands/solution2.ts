const DIRS = [
  [0, 1],
  [-1, 0],
  [1, 0],
  [0, -1],
]

function closedIsland(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;
  const isClosedIsland = (i: number, j: number): boolean => {
    if(i < 0 || i >= r || j < 0 || j >= c) {
      return false;
    }
    if(grid[i][j] === 1) {
      return true;
    }
    grid[i][j] = 1;
    let res = true;
    for(const [di, dj] of DIRS) {
      const isDirClosed = isClosedIsland(i + di, j + dj);
      res &&= isDirClosed;
    }
    return res;
  }
  let res = 0;
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === 0 && isClosedIsland(i, j)) {
        res++;
      }
    }
  }
  return res;
};
