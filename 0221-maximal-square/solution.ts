function maximalSquare(matrix: string[][]): number {
  const r = matrix.length;
  const c = matrix[0].length
  const dp = Array(r + 1).fill(null).map(() => Array(c + 1).fill(0));
  let res = 0;
  for(let i = 1; i <= r; i++) {
    for(let j = 1; j <= c; j++) {
      if(matrix[i - 1][j - 1] !== '1') {
        continue;
      }
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
      res = Math.max(res, dp[i][j]);
    }
  }
  return res * res;
};
