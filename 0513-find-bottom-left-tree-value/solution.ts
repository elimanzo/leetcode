// https://leetcode.com/problems/find-bottom-left-tree-value/description/
// 0513-find-bottom-left-tree-value

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

function findBottomLeftValue(root: TreeNode | null): number {
  const q = [root];
  let qi = 0;
  let node = null;
  while(qi < q.length) {
    node = q[qi++];
    if(!node) {
      continue;
    }
    if(node.right) {
      q.push(node.right)
    }
    if(node.left) {
      q.push(node.left)
    }
    node = node.val;
  }

  return node;
};
