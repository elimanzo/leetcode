// https://leetcode.com/problems/minimum-falling-path-sum
// 0931-minimum-falling-path-sum

function minFallingPathSum(matrix: number[][]) {
  for (let i = matrix.length - 2; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Math.min(
        matrix[i][j] + (matrix[i + 1][j - 1] ?? Infinity),
        matrix[i][j] + (matrix[i + 1][j] ?? Infinity),
        matrix[i][j] + (matrix[i + 1][j + 1] ?? Infinity),
      );
    }
  }
  return Math.min(...matrix[0]);
}
