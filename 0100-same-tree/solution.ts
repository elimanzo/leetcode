// https://leetcode.com/problems/same-tree/
// 0100-same-tree

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!q && !p) {
    return true;
  }
  if(!q || !p) {
    return false;
  }
  if(p.val !== q.val) {
    return false;
  }

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  
  return left && right;
};
