// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal
// 0889-construct-binary-tree-from-preorder-and-postorder-traversal
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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  if(preorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  if(preorder.length === 1) {
    return root;
  }

  const index = postorder.indexOf(preorder[1]);

  const leftPost = postorder.slice(0, index + 1);
  const rightPost = postorder.slice(index + 1, -1);

  const leftPre = preorder.slice(1, leftPost.length + 1);
  const rightPre = preorder.slice(leftPost.length + 1);

  root.left = constructFromPrePost(leftPre, leftPost);
  root.right = constructFromPrePost(rightPre, rightPost);

  return root;
};
