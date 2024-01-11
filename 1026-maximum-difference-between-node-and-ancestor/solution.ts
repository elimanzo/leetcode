// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// 1026-maximum-difference-between-node-and-ancestor

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

function maxAncestorDiff(root: TreeNode | null): number {
  let res = 0;
  const traverse = (node: TreeNode | null, maxAncestor: number, minAncestor: number): void => {
    if (node == null) {
      return;
    }
    res = Math.max(res, Math.abs(maxAncestor - node.val), Math.abs(minAncestor - node.val))
    minAncestor = Math.min(minAncestor, node.val);
    maxAncestor= Math.max(maxAncestor, node.val);
    traverse(node.left, maxAncestor, minAncestor);
    traverse(node.right, maxAncestor, minAncestor);
  }
  traverse(root, root.val, root.val);
  return res;
};
