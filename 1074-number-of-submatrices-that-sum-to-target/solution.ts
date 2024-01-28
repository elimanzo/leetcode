// https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
// 1074-number-of-submatrices-that-sum-to-target

function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const r = matrix.length;
  const c = matrix[0].length;
  const sums = matrix.map(row => [...row]);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      sums[i][j] += 
        (sums[i - 1]?.[j] ?? 0) + 
        (sums[i]?.[j - 1] ?? 0) - 
        (sums[i - 1]?.[j - 1] ?? 0);
    }
  }

  let res = 0;
  for (let r1 = 0; r1 < r; r1++) {
    for (let r2 = r1; r2 < r; r2++) {
      const count = {};
      count[0] = 1;
      for (let c1 = 0; c1 < c; c1++) {
        const curSum = sums[r2][c1] - (sums[r1 - 1]?.[c1] ?? 0);
        const diff = curSum - target;
        res += (count[diff] ?? 0);
        count[curSum] = (count[curSum] ?? 0) + 1;
      }
    }
  }

  return res;
};
