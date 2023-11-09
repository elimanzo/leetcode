// https://leetcode.com/problems/last-stone-weight
// 1046-last-stone-weight

function lastStoneWeight(stones: number[]): number {
  const maxQueues = new MaxPriorityQueue();
  for(const s of stones) {
    maxQueues.enqueue(s);
  }
  while(maxQueues.size() > 1) {
    const a = maxQueues.dequeue().element;
    const b = maxQueues.dequeue().element;
    if(a !== b) {
      maxQueues.enqueue(a - b);
    }
  }
  return maxQueues.front().element;
};
