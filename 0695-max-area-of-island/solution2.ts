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

  const bfs = (i: number, j: number) => {
    const q = [[i, j]];
    let qi = 0;
    grid[i][j] = 0;
    let area = 0;

    while(qi < q.length) {
      const[oi, oj] = q[qi++];
      area++;
      for (const [di, dj] of DELTA) {
        const ni = di + oi;
        const nj = dj + oj;

        if(0 <= ni && ni < r && 0 <= nj && nj < c && grid[ni][nj] === 1) {
          grid[ni][nj] = 0;
          q.push([ni, nj]);
        }
      }
    }
    return area;
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, bfs(i, j));
      }
    }
  }
  return maxArea;
};