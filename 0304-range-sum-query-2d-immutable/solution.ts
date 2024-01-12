// https://leetcode.com/problems/range-sum-query-2d-immutable/
// 0304-range-sum-query-2d-immutable

class NumMatrix {
  sums: number[][];
  constructor(matrix: number[][]) {
    const r = matrix.length;
    const c = matrix[0].length;
    this.sums = matrix.map(row => [...row]);
    for(let i = 0; i < r; i++) {
      for(let j = 0; j < c; j++) {
        this.sums[i][j] += (                 // Add Current
          (this.sums[i - 1]?.[j] ?? 0)       // Add Top
          + (this.sums[i]?.[j - 1] ?? 0)     // Add Left
          - (this.sums[i - 1]?.[j - 1] ?? 0) // Subtract Top left (double count)
        );
      }
    }
    console.log(this.sums)
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return  (
        this.sums[row2][col2]                 // Total Sum
      - (this.sums[row1 - 1]?.[col2] ?? 0)    // Subtract Top
      - (this.sums[row2]?.[col1 -1] ?? 0)     // Subtract Left
      + (this.sums[row1 - 1]?.[col1 -1] ?? 0) // Add Top Left
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
