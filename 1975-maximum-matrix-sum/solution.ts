function maxMatrixSum(matrix: number[][]): number {
  let res = 0;
  let lowestAbs = Infinity;
  let negativeCount = 0;

  for(const row of matrix) {
    for(const col of row) {
      if(col <= 0) {
        ++negativeCount;
      }

      const curr = Math.abs(col);
      res += curr;
      lowestAbs = Math.min(curr, lowestAbs);

    }
  }

  return negativeCount % 2 === 0 ? res : res - (lowestAbs * 2);
};
