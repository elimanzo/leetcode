// https://leetcode.com/problems/path-crossing/
// 1496-path-crossing

const DIR = {
  "N": [0, 1],
  "S": [0, -1],
  "E": [1, 0],
  "W": [-1, 0]
}

function isPathCrossing(path: string): boolean {
  const vis = new Set<string>([`${0} ${0}`]);
  let [ci, cj] = [0, 0];
  for (const cardinal of path) {
    const [di, dj] = DIR[cardinal];
    [ci, cj] = [ci + di, cj + dj]
    const key = `${ci} ${cj}`;
    if(vis.has(key)) {
      return true;
    }
    vis.add(`${ci} ${cj}`);
  }
  return false;
};
