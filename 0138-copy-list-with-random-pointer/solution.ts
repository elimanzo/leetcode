// https://leetcode.com/problems/copy-list-with-random-pointer/description/
// 0138-copy-list-with-random-pointer

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(node: Node | null): Node | null {
  const nodeMap = new Map<Node, Node>();
  const ogNode = node;
  while(node) {
    const copyNode = new Node(node.val);
    nodeMap.set(node, copyNode);
    node = node.next;
  }

  for(const [oldNode, newNode] of nodeMap) {
    newNode.next = nodeMap.get(oldNode.next) ?? null;
    newNode.random = nodeMap.get(oldNode.random) ?? null;
  }
  return nodeMap.get(ogNode) ?? null;
};
