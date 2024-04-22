// https://leetcode.com/problems/find-all-groups-of-farmland
// 1992-find-all-groups-of-farmland

const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
]

function findFarmland(land: number[][]): number[][] {
  const r = land.length;
  const c = land[0].length;

  const res = [];
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(land[i][j] === 0) {
        continue;
      }

      const group = [i, j, i, j]
      const q = [[i, j]];
      let qi = 0;
      land[i][j] = 0;
      const visited = new Set([`${i} ${j}`]);
      while(qi < q.length) {
        const [ci, cj] = q[qi++];
        for (const [di, dj] of DIR) {
          const [ni, nj] = [ci + di, cj + dj];
          if(ni < 0 || ni >= r || nj < 0 || nj >= c || land[ni][nj] === 0) {
            continue;
          }
          land[ni][nj] = 0;
          const key = `${ni} ${nj}`;
          if(visited.has(key)) {
            continue;
          }
          group[0] = Math.min(group[0], ni)
          group[1] = Math.min(group[1], nj)
          group[2] = Math.max(group[2], ni)
          group[3] = Math.max(group[3], nj)
          visited.add(key);
          q.push([ni, nj]);
        } 
      }
      res.push(group);
    }
  }

  return res;
};
