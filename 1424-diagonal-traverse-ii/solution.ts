// https://leetcode.com/problems/diagonal-traverse-ii/
// 1424-diagonal-traverse-ii

function findDiagonalOrder(nums: number[][]): number[] {
  const rows = nums.length;
  const cols = nums[0].length;
  const diagonals = nums.map(num => num.length).reduce((a, b) => a + b) + cols - 1;
  const res = Array(diagonals).fill(null).map(num => []);
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < nums[i].length; j++) {
      res[i + j].push(nums[i][j]);
    }
  }

  return res.flatMap(num => num.reverse()).filter(Boolean);
};
