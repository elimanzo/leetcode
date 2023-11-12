// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
// 0094-binary-tree-inorder-traversal

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

function inorderTraversal(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }
  const res = [];
  const stack: [TreeNode | null, Boolean][]  = [[root, false]];
  while(stack.length > 0) {
    const [node, seen] = stack.pop();
    if(!node) {
      continue;
    }
    if(seen === true) {
      res.push(node.val);
      continue;
    }
    stack.push([node.right, false]);
    stack.push([node, true]);
    stack.push([node.left, false]);
  }
  return res;
};
