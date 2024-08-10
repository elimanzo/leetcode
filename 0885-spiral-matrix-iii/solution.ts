function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
  const totalCells = rows * cols;
  const res: number[][] = [];
  let i = rStart;
  let j = cStart;
  let step = 1;

  // Move in right, down, left, up pattern
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  res.push([i, j]);
  let dir = 0;

  while (res.length < totalCells) {
    for (let k = 0; k < 2; k++) {
      for (let l = 0; l < step; l++) {
        i += directions[dir][0];
        j += directions[dir][1];

        if (i >= 0 && i < rows && j >= 0 && j < cols) {
          res.push([i, j]);
        }
      }
      dir = (dir + 1) % 4; // Change direction
    }
    step++;
  }

  return res;
}
