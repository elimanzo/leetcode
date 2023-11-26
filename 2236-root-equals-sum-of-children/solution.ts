// https://leetcode.com/problems/root-equals-sum-of-children/description/
// 2236-root-equals-sum-of-children

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

function checkTree(root: TreeNode | null): boolean {
  if(!root) {
    return true;
  }
  
  if(!root.left && !root.right) {
    return true;
  }
  if(root.val !== (root.left?.val ?? 0) + (root.right?.val ?? 0)) {
    return false;
  }

  return checkTree(root.left) && checkTree(root.right);
};
