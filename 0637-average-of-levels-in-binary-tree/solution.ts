// https://leetcode.com/problems/average-of-levels-in-binary-tree/
// 0637-average-of-levels-in-binary-tree

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

function averageOfLevels(root: TreeNode | null): number[] {
  let level = !root ? [] : [root];
  const res = [];
  while(level.length > 0) {
    res.push(level.reduce((a, node) => a + node.val, 0) / level.length);
    level = level.flatMap(node => [node.left, node.right]).filter(Boolean);
  }
  return res;
};
