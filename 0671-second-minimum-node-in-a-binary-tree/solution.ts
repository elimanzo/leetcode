// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
// 0671-second-minimum-node-in-a-binary-tree

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

function findSecondMinimumValue(root: TreeNode | null): number {
  return helper(root)[1] ?? -1;
};

function helper(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }

  const left = helper(root.left);
  const right = helper(root.right);

  return [...new Set([...left, ...right, root.val])].sort((a, b) => a - b).slice(0, 2);
}
