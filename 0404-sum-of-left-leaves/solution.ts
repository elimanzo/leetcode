// https://leetcode.com/problems/sum-of-left-leaves/description/
// 0404-sum-of-left-leaves

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

function sumOfLeftLeaves(root: TreeNode | null, isLeft: boolean = false): number {
  if(!root) {
    return 0;
  }
  if(isLeft && !root.right && !root.left) {
    return root.val
  }

  const left = sumOfLeftLeaves(root.left, true);
  const right = sumOfLeftLeaves(root.right);

  return left + right;
};
