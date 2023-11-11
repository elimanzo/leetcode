// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// 0107-binary-tree-level-order-traversal-ii

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

function levelOrderBottom(root: TreeNode | null): number[][] {
    const res = [];
    const traverse = (node: TreeNode | null, level: number = 0): void => {
      if(!node) {
        return;
      }
      if(level >= res.length) {
        res.push([]);
      }
      res[level].push(node.val);
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }
    traverse(root);
    return res.reverse();
};
