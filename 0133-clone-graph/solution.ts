// https://leetcode.com/problems/clone-graph/description/
// 0133-clone-graph

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  if (!node) { 
    return null;
  }

  let q = [node];
  let visited = new Set(q);
  const copy = new Map<Node, Node>();
  while (q.length > 0) {
    const front = q.shift(); 
    const copyNode = new Node(front.val);
    copy.set(front, copyNode);
    for (const neighbor of front.neighbors) {
      if (!visited.has(neighbor)) {
        q.push(neighbor); 
        visited.add(neighbor);
      }
    }
  }

  for(const [oldNode, newNode] of copy) {
    newNode.neighbors = oldNode.neighbors.map((neighbor) => copy.get(neighbor));
  }

  return copy.get(node);
};
