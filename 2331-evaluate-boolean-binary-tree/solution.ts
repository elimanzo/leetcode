// https://leetcode.com/problems/evaluate-boolean-binary-tree/
// 2331-evaluate-boolean-binary-tree

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

function evaluateTree(root: TreeNode | null): boolean {
  if(!root || root.val === 0) {
    return false
  }
  if(root.val === 1) {
    return true;
  }
  return root.val === 3 ?
    evaluateTree(root.left) && evaluateTree(root.right) :
    evaluateTree(root.left) || evaluateTree(root.right);
};
