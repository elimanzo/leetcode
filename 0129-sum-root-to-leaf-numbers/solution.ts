// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// 0129-sum-root-to-leaf-numbers

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

function sumNumbers(root: TreeNode | null): number {
  const traverse = (node: TreeNode | null, curNumber: number = 0): number => {
    if(!node) {
      return 0;
    }
    curNumber = curNumber * 10 + node.val;
    if(!node.left && !node.right) {
      return curNumber;
    }
    const left = traverse(node.left, curNumber);
    const right = traverse(node.right, curNumber);
    return left + right;
  }
  return traverse(root);
};
