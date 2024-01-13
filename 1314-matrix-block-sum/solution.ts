// https://leetcode.com/problems/matrix-block-sum/
// 1314-matrix-block-sum

function matrixBlockSum(mat: number[][], k: number): number[][] {
  const r = mat.length;
  const c = mat[0].length;
 
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      mat[i][j] += 
      (mat[i]?.[j - 1] ?? 0 ) + 
      (mat[i - 1]?.[j] ?? 0) - 
      (mat[i - 1]?.[j - 1] ?? 0);
    }
  }

  const ans = Array(r).fill(null).map(() => Array(c).fill(null));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const r1 = Math.max(0, i - k);
      const r2 = Math.min(r - 1, i + k);
      const c1 = Math.max(j - k, 0);
      const c2 = Math.min(c - 1, j + k);

      ans[i][j] = 
        mat[r2][c2] - 
        (mat[r1 - 1]?.[c2] ?? 0) - 
        (mat[r2]?.[c1 - 1] ?? 0) + 
        (mat[r1 - 1]?.[c1 - 1] ?? 0)
    }
  }
  return ans;
};
