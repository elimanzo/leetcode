// https://leetcode.com/problems/range-sum-query-mutable/description/
// 0307-range-sum-query-mutable
class SegmentNode {
  lo: number;
  hi: number;
  sum: number;

  // Every node will either have 0 children or 2 children.
  left: SegmentNode | null = null;
  right: SegmentNode | null = null;
  parent: SegmentNode | null = null;

  update(index: number, sum: number): void {
    // index outside the segment, so we don't care about it
    if (index < this.lo || index > this.hi) {
      return;
    }

    // index is exactly what we care about
    if (index === this.lo && index === this.hi) {
      this.sum = sum;
      return;
    }

    // index is inside the segment
    this.left.update(index, sum);
    this.right.update(index, sum);
    this.sum = this.left.sum + this.right.sum;
  }

  getSum(rangeLo: number, rangeHi: number): number {
    // segment entirely outside the range (no overlap)
    if (rangeLo > this.hi || rangeHi < this.lo) {
      return 0;
    }

    // segment entirely inside the range --> return our sum
    if (rangeLo <= this.lo && this.hi <= rangeHi) {
      return this.sum;
    }

    // segment partially inside the range
    // --> this node doesn't know the answer, have to delegate
    return (
      this.left.getSum(rangeLo, rangeHi) +
      this.right.getSum(rangeLo, rangeHi)
    );
  }

  static makeLeaf(index: number, sum: number): SegmentNode {
    const res = new SegmentNode();
    res.lo = index;
    res.hi = index;
    res.sum = sum;
    return res;
  }

  static join(a: SegmentNode, b: SegmentNode): SegmentNode {
    const res = new SegmentNode();
    res.lo = a.lo;
    res.hi = b.hi;
    res.sum = a.sum + b.sum;

    res.left = a;
    res.right = b;
    a.parent = res;
    b.parent = res;

    return res;
  }

  toString(): string {
    return `{lo: ${this.lo}, hi: ${this.hi}, sum: ${this.sum}}`;
  }

  static getRootForArray(nums: readonly number[]): SegmentNode {
    const leaves =
      nums.map((value, index) => SegmentNode.makeLeaf(index, value));
    
    let layer = leaves;
    while (layer.length > 1) {
      const newLayer = [];

      for (let i = 1; i < layer.length; i += 2) {
        newLayer.push(SegmentNode.join(layer[i - 1], layer[i]));
      }

      if (layer.length % 2 === 1) {
        newLayer.push(layer[layer.length - 1]);
      }

      layer = newLayer;
    }

    return layer[0];
  }
}

class NumArray {
  root: SegmentNode;

  constructor(nums: number[]) {
    this.root = SegmentNode.getRootForArray(nums);
  }

  update(index: number, val: number): void {
    this.root.update(index, val);
  }

  sumRange(left: number, right: number): number {
    return this.root.getSum(left, right);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
