// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// 0104-maximum-depth-of-binary-tree

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

function maxDepth(root: TreeNode | null): number {
  // Under what circumstance do we know the answers (Base Cases)
  // No Tree = 0 & No Children = 1
  if(!root) {
    return 0;
  }

  // Run recursion left and right
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // Combine answers
  return Math.max(left, right) + 1;
};
