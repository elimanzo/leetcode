// https://leetcode.com/problems/find-if-path-exists-in-graph/description/
// 1971-find-if-path-exists-in-graph
class UnionFind {
  parent: number[];
  // Every child will have there own parent
  constructor(n: number) {
    this.parent = Array(n).fill(null).map((_, i) => i);
  }
  // There can only be 1 parent
  union(a: number, b: number):void {
    this.parent[this.find(a)] = this.find(b);
  }
  // get parent and make sure to update current child
  find(a: number): number {
    return this.parent[a] === a ? a : (this.parent[a] = this.find(this.parent[a]));
  }
}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const uf = new UnionFind(n);
  for(const [v1, v2] of edges) {
    uf.union(v1, v2);
  }
  return uf.find(source) === uf.find(destination);
};
