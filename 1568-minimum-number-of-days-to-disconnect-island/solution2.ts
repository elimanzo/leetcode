// https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/description/
// 1568-minimum-number-of-days-to-disconnect-island
const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1]
]

function minDays(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;

  let islandCount = countIslands(grid);
  console.log(islandCount)
  if (islandCount !== 1) {
    return 0;
  }
  
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === 1) {
        grid[i][j] = 0;
        islandCount  = countIslands(grid)
        if(islandCount !== 1) {
          return 1;
        } 
        grid[i][j] = 1;
      }
    }
  }
  return 2;
};

function countIslands(grid: number[][]): number {
  
  const r = grid.length;
  const c = grid[0].length;
  let res = 0;
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] !== 1) {
        continue;
      }

      const q = [[i, j]];
      let qi = 0;
      grid[i][j] = 2;
      res++;
      while(qi < q.length) {
        const[ci, cj] = q[qi++];
        for(const [di, dj] of DIR) {
          const [ni, nj] = [ci + di, cj + dj];
          if(ni < 0 || ni >= r || nj < 0 || nj >= c || grid[ni][nj] !== 1) {
            continue;
          }

          grid[ni][nj] = 2;
          q.push([ni, nj]);
        }
      }
    }
  }
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      grid[i][j] /= 2;
    }
  }
  return res;
}
