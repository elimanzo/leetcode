// https://leetcode.com/problems/range-sum-of-bst/submissions/
// 0938-range-sum-of-bst

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

function rangeSumBST(root: TreeNode | null, initialLow: number, initialHigh: number): number {
    let rangedSum = 0;
    const stack:[TreeNode | null, number, number][] = [[root, initialLow, initialHigh]];
    while(stack.length > 0) {
        const [node, low, high] = stack.pop();

        if(!node) continue;

        if(low < node.val) stack.push([node.left, low, Math.min(node.val, high)]);
        if(high > node.val) stack.push([node.right, Math.max(node.val, low), high]);
        if(low <= node.val && node.val <= high) rangedSum += node.val;
    }
    return rangedSum
};

// function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
//     if (!root) return 0;

//     const l = low < root.val ? rangeSumBST(root.left, low, Math.min(root.val, high)) : 0;
//     const r = high > root.val ? rangeSumBST(root.right, Math.max(root.val, low), high) : 0;
//     const val = low <= root.val && root.val <= high ? root.val : 0;

//     return l + r + val;
// };
