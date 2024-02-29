// https://leetcode.com/problems/even-odd-tree/
// 1609-even-odd-tree

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isEvenOddTree(root: TreeNode | null): boolean {
  let levels = root ? [root] : [];
  let res = [];
  while(levels.length > 0) {
    res.push(levels.map(n => n.val));
    levels = levels.flatMap(n => [n.left, n.right]).filter(Boolean);
  }

  for(let i = 0; i < res.length; i++) {
    if(i % 2 === 0) {
      if(res[i][0] % 2 === 0) {
        return false;
      }
      for(let j = 1; j < res[i].length; j++) {
        if(res[i][j] % 2 === 0 || res[i][j] <= res[i][j - 1]) {
          return false;
        }
      }
    } else {
      if(res[i][0] % 2 !== 0) {
        return false;
      }
      for(let j = 1; j < res[i].length; j++) {
        if(res[i][j] % 2 !== 0 || res[i][j] >= res[i][j - 1]) {
          return false;
        }
      }
    }
  }
  return true;
};
