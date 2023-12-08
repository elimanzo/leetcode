// https://leetcode.com/problems/construct-string-from-binary-tree/
// 0606-construct-string-from-binary-tree

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

function tree2str(root: TreeNode | null): string {
  let res = '';
  const traverse = (node: TreeNode | null) => {
    if(!node) {
      return;
    }
    res += node.val;
    if (!node.left && !node.right) {
      return;
    }

    res += '(';
    if (node.left) {
        traverse(node.left);
    }
    res += ')';
    
    if (node.right) {
      res += '(';
      traverse(node.right);
      res += ')';
    }
  }
  traverse(root);
  return res;
};
