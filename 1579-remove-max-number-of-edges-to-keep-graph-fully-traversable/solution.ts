class UnionFind {
  parents: number[];
  sizes: number[];
  groups: number;

  private constructor(parents: number[], sizes: number[], groups: number) {
    this.parents = parents;
    this.sizes = sizes;
    this.groups = groups;
  }

  public static create(n: number): UnionFind {
    const parents = Array.from({ length: n }, (_, i) => i);
    const sizes = Array(n).fill(1);
    return new UnionFind(parents, sizes, n);
  }

  find(a: number): number {
    return this.parents[a] === a ? a : (this.parents[a] = this.find(this.parents[a]));
  }

  union(a: number, b: number): boolean {
    let pa = this.find(a);
    let pb = this.find(b);

    if (pa === pb) {
      return false;
    }

    if (this.sizes[pa] > this.sizes[pb]) {
      [pa, pb] = [pb, pa];
    }
    this.parents[pa] = pb;
    this.sizes[pb] += this.sizes[pa];
    this.groups--;
    return true;
  }

  public copyOf(): UnionFind {
    return new UnionFind([...this.parents], [...this.sizes], this.groups);
  }
}


function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  let res = 0;

  const ufJoint = UnionFind.create(n);

  for (const type of [3, 1, 2]) {
    const uf = type === 3 ? ufJoint : ufJoint.copyOf();
    for (const [eType, a, b] of edges) {
      if (eType === type && !uf.union(a - 1, b - 1)) {
        res++;
      }
    }

    if (type !== 3 && uf.groups > 1) {
      return -1;
    }
  }

  return res;
};
