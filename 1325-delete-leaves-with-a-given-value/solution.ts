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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {

  const stack: [TreeNode, boolean][] = !root ? [] : [[root, false]];

  const isTargetLeafNode = (node: TreeNode | null): boolean => {
    return node.left === null && node.right === null && node.val === target;
  }

  while (stack.length > 0) {
    const [node, visited] = stack.pop();

    if (visited) {
      if (node?.right && isTargetLeafNode(node.right)) {
        node.right = null;
      }
      if (node?.left && isTargetLeafNode(node.left)) {
        node.left = null;
      }
    } else {
      stack.push([node, true]);
      if (node.right) stack.push([node.right, false]);
      if (node.left) stack.push([node.left, false]);
    }
  }

  return isTargetLeafNode(root) ? null : root;
};
