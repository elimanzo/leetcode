// https://leetcode.com/problems/island-perimeter/
// 0463-island-perimeter

const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1]
];

function islandPerimeter(grid: number[][]): number {
  const r = grid.length
  const c = grid[0].length;

  let res = 0;
  for (let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === 0) {
        continue;
      }

      const q = [[i, j]]
      let qi = 0;
      grid[i][j] = 0;
      while(qi < q.length) {
        const [ci, cj] = q[qi++];
        for(const [di, dj] of DIR) {
          const [ni, nj] = [ci + di, cj + dj];
          if(ni < 0 || ni >= r || nj < 0 || nj >= c || grid[ni][nj] === 0) {
            continue;
          }
          grid[ni][nj] = 0;
          q.push([ni, nj])
        }
      }
      const setQ = new Set(q.map(([x, y]) => x.toString() + ',' + y.toString()));
      for(const cell of q) {
        res += getPerimeter(cell as any, setQ);
      }
    }
  }
  return res;
};

function getPerimeter([x, y]: [number, number], islandCells: Set<string>): number {
  let res = 4;
  for(const [di, dj] of DIR) {
    const[ni, nj] = [x + di, y + dj];
    const key = `${ni},${nj}`;
    if(islandCells.has(key)) {
      res--;
    }
  }
  return res;
}

// Every island has 4 sides
// when an island is sorrounded by other islands the sides don't count
// 
