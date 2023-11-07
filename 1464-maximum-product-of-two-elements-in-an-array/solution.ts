// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// 1464-maximum-product-of-two-elements-in-an-array

function maxProduct(nums: number[]): number {
  const maxQueues = new MinPriorityQueue();
  for(const n of nums) {
    maxQueues.enqueue(n);
    if(maxQueues.size() > 2) {
      maxQueues.dequeue();
    }
  }
  return (maxQueues.front().element - 1) * (maxQueues.back().element - 1);
};
