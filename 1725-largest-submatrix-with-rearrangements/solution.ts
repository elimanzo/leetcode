// https://leetcode.com/problems/largest-submatrix-with-rearrangements/
// 1725-largest-submatrix-with-rearrangements

function largestSubmatrix(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = 0;

  for(let row = 0; row < m; row++) {
    for(let col = 0; col < n; col++) {
      if(matrix[row][col] !== 0 && row > 0) {
        matrix[row][col] += matrix[row - 1][col];
      }
    }
    const currRow = [...matrix[row]].sort((a, b) => b - a);
    for(let i = 0; i < n; i++) {
      res = Math.max(res, currRow[i] * (i + 1));
    }
  }
  return res;
};
