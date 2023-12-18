// https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// 0417-pacific-atlantic-water-flow

const DIR = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]

function pacificAtlantic(grid: number[][]): number[][] {
  // # of cells = r * c
  // n = # of cells
  const r = grid.length;
  const c = grid[0].length;

  const cellsNearPacific = new Set<string>();
  const cellsNearAtlantic = new Set<string>();
  for(let i = 0; i < r; i++) {
    cellsNearPacific.add(`${i} ${0}`);
    cellsNearAtlantic.add(`${i} ${c - 1}`);
  }

  for(let j = 0; j < c; j++) {
    cellsNearPacific.add(`${0} ${j}`);
    cellsNearAtlantic.add(`${r - 1} ${j}`);
  }

  makeWaterRise(grid, cellsNearPacific);
  makeWaterRise(grid, cellsNearAtlantic);

  return [...cellsNearPacific]
    .filter(cell => cellsNearAtlantic.has(cell))
    .map(s => s.split(' ').map(Number));
};

function makeWaterRise(grid: number[][], ocean: Set<string>): void {
  const r = grid.length;
  const c = grid[0].length;
  const q = [...ocean].map(s => s.split(' ').map(Number));
  let qi = 0;
  while(qi < q.length) {
    const [ci, cj] = q[qi++];
    for(const [di, dj] of DIR) {
      const [ni, nj] = [ci + di, cj + dj];
      if(ni < 0 || ni >= r || nj < 0 || nj >= c) {
        continue;
      }

      if(grid[ci][cj] > grid[ni][nj]) {
        continue;
      }

      const key = `${ni} ${nj}`;
      if(ocean.has(key)) {
        continue;
      }
      ocean.add(key);
      q.push([ni, nj]);
    }
  }
  console.log(q)
}

