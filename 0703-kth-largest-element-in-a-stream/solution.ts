// https://leetcode.com/problems/kth-largest-element-in-a-stream
// 0703-kth-largest-element-in-a-stream
class KthLargest {
  pq = new MinPriorityQueue();
  k: number;
  constructor(k: number, nums: number[]) {
    this.k = k;
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    this.pq.enqueue(val);
    if (this.pq.size() > this.k) {
      this.pq.dequeue();
    }
    return this.pq.front().element;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
