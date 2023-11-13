// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// 0103-binary-tree-zigzag-level-order-traversal

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if(!root) {
    return [];
  }
  const res = [];
  let level = [root];
  while(level.length > 0) {
    res.push(level.map(node => node.val));
    level = level.flatMap(node => [node.left, node.right]).filter(Boolean);
  }
  res.forEach((item, i) => {
    if(i % 2 !== 0) {
      item = item.reverse()
    }
  });
  return res;
};
