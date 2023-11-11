// https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/
// 0515-find-largest-value-in-each-tree-row

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

function largestValues(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }
  const res = [];
  let level = [root];
  while(level.length !== 0) {
    res.push(Math.max(...level.map(node => node.val)))
    level = level.flatMap(node => [node.left, node.right]).filter(Boolean);
  }
  return res;
};


// Pre-Order
// function largestValues(root: TreeNode | null): number[] {
//   const res = [];

//   const traverse = (node: TreeNode | null, level: number) => {
//     if (!node) {
//       return;
//     }

//     if (level >= res.length) {
//       res.push(-Infinity);
//     }
//     res[level] = Math.max(res[level], node.val);

//     traverse(node.left, level + 1);
//     traverse(node.right, level + 1);
//   };

//   traverse(root, 0);
//   return res;
