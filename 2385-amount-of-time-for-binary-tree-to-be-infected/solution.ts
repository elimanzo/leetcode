// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/
// 2385-amount-of-time-for-binary-tree-to-be-infected

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

function amountOfTime(root: TreeNode | null, start: number): number {
  let res = 0;
  const traverse = (root: TreeNode | null, start: number): number => {
    if (!root) {
      return 0;
    }

    let left = traverse(root.left, start);
    let right = traverse(root.right, start);

    if (root.val === start) {
      res = Math.max(left, right);
      return -1;
    }
    if (left >= 0 && right >= 0) {
      return Math.max(left, right) + 1;
    } 
    res = Math.max(res, Math.abs(left - right));
    return Math.min(left, right) - 1;
  }
  traverse(root, start);
  return res;
};
