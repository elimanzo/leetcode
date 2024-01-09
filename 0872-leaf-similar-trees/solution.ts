// https://leetcode.com/problems/leaf-similar-trees/
// 0872-leaf-similar-trees

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const seq1 = [];
  const seq2 = [];
  const traverse = (node: TreeNode | null, seq: number[]) => {
    if(node == null) {
      return
    }
    traverse(node.left, seq);
    if(node != null && node.left == null && node.right == null) {
      seq.push(node.val); 
    }
    traverse(node.right, seq);
  }
  traverse(root1, seq1);
  traverse(root2, seq2);
  
  if (seq1.length !== seq2.length) {
    return false;
  }

  return seq1.every((_, i) => seq1[i] === seq2[i]);
};
