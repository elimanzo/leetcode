// https://leetcode.com/problems/greatest-common-divisor-traversal/description/
// 2709-greatest-common-divisor-traversal

class UnionFind {
  parent: number[];
  size: number[];
  count: number;
  // Every child will have there own parent
  constructor(n: number) {
    this.parent = Array(n).fill(null).map((_, i) => i);
    this.size = Array(n).fill(1);
    this.count = n;
  }
  // There can only be 1 parent
  union(a: number, b: number):void {
    const [pa, pb] = [this.find(a), this.find(b)];
    if(pa === pb) {
      return;
    }
    if(this.size[pa] < this.size[pb]) {
      this.parent[pa] = pb;
      this.size[pb] += this.size[pa];
    } else {
      this.parent[pb] = pa;
      this.size[pa] += this.size[pb];
    }
    this.count--;
  }
  // get parent and make sure to update current child
  find(a: number): number {
    return this.parent[a] === a ? a : (this.parent[a] = this.find(this.parent[a]));
  }
}

function canTraverseAllPairs(nums: number[]): boolean {
  const uf = new UnionFind(nums.length);

  const factorIndex = {}; // f -> index of value with factor f
  for(let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let f = 2;
    while(f * f <= n) {
      if(n % f === 0) {
        if(factorIndex[f] != null) {
          uf.union(i, factorIndex[f]);
        } else {
          factorIndex[f] = i;
        }
        while(n % f === 0) {
          n = Math.floor(n / f);
        }
      }
      f++; 
    }
    if(n > 1) {
      if(factorIndex[n] != null) {
        uf.union(i, factorIndex[n]);
      } else {
        factorIndex[n] = i;
      }
    }
  }
  return uf.count === 1
};
