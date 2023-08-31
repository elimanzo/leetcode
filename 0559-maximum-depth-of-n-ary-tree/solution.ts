// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/
// 0559-maximum-depth-of-n-ary-tree

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    return !root ? 0 : Math.max(0, ...root.children.map(maxDepth)) + 1
};

// function maxDepth(root: Node | null): number {
//     let myMaxDepth = 0;
//     const stack:[Node | null, number][] = [[root, myMaxDepth + 1]];
//     while(stack.length > 0) {
//         const [node, currentDepth] = stack.pop();
//         if (!node) continue;
//         myMaxDepth = Math.max(currentDepth, myMaxDepth);
//         for (const child of node.children) {
//             stack.push([child, currentDepth + 1]);
//         }
//     }
//     return myMaxDepth;
// };
