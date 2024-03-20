// https://leetcode.com/problems/spiral-matrix/
// 0054-spiral-matrix
function spiralOrder(matrix: number[][]): number[] {
  let remainingRows = matrix.length;
  let remainingCols = matrix[0].length;
  let row = 0;
  let col = -1;
  let direction = 1;
  let res = [];

  while (remainingRows > 0 && remainingCols > 0) {
    for (let j = 0; j < remainingCols; j++) {
      col += direction;
      res.push(matrix[row][col]);
    }
    remainingRows--;

    for (let i = 0; i < remainingRows; i++) {
      row += direction;
      res.push(matrix[row][col]);
    }
    remainingCols--;
    direction *= -1;
  }
  return res;
};
