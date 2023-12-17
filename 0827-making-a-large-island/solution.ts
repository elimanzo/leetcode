// https://leetcode.com/problems/making-a-large-island/description/
// 0827-making-a-large-island

const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1]
];


// 0 water 
// 1 is land
// 2 is island we visisted
function largestIsland(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;
  
  const neighbors: Record<string, number[]> = {}; // map water to island sizes of neighbors

  for(let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if(grid[i][j] !== 1) {
        continue;
      }

      const q = [[i, j]];
      let qi = 0;
      grid[i][j] = 2;
      const waterSet: Set<string> = new Set();
      while(qi < q.length) {
        const [ci, cj] = q[qi++];
        for(const [di, dj] of DIR) {
          const [ni, nj] = [ci + di, cj + dj];
          if(ni < 0 || ni >= r || nj < 0 || nj >= c) {
            continue;
          } 
          if(grid[ni][nj] === 0) {
            waterSet.add(`${ni},${nj}`);
            continue;
          }
          if(grid[ni][nj] === 1) {
            grid[ni][nj] = 2;
            q.push([ni, nj]);
          }
        }
      }
      for(const cell of waterSet) {
        if(!neighbors[cell]) {
          neighbors[cell] = []; 
        }
        neighbors[cell].push(q.length);
      }
    }
  }
  const sizes = Object.values(neighbors).map(n => n.reduce((a, b) => a + b, 1));
  let res = Math.max(0, ...sizes);
  if(res === 0) {
    if(grid[0][0] === 0) {
      return 1;
    }
    return r * c;
  }
  return res;
};
