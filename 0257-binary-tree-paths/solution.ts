// https://leetcode.com/problems/binary-tree-paths/
// 0257-binary-tree-paths

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

function binaryTreePaths(root: TreeNode | null): string[] {
  const res = [];
  const path = [];
  const traverse = (node: TreeNode | null): void => {
    if(!node) {
      return;
    }
    path.push(node);
    if(!node.left && !node.right) {
      res.push(path.map(node => node.val).join('->'));
    } else {
      traverse(node.left);
      traverse(node.right);
    }
    path.pop();
  }
  traverse(root);
  return res;
};


// function binaryTreePaths(root: TreeNode | null): string[] {
//   return solve(root, '');
// };

// function solve(node: TreeNode | null, path: string): string[] {
//   if(!node) {
//     return [];
//   }
//   const pathPlusCurrentNode = path === '' ? node.val.toString() : path + '->' + node.val;
//   if(!node.left && !node.right) {
//     return [pathPlusCurrentNode];
//   }

//   const left = solve(node.left, pathPlusCurrentNode);
//   const right = solve(node.right, pathPlusCurrentNode);
//   return [...left, ...right];
// };

// function binaryTreePaths(root: TreeNode | null): string[] {
//   if(!root) {
//     return [];
//   }
//   if(!root.left && !root.right) {
//     return [root.val + ''];
//   }

//   const left = binaryTreePaths(root.left);
//   const right = binaryTreePaths(root.right);

//   return [...left, ...right].map(path => root.val + '->' + path);
// };
