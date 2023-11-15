// https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/
// 2558-take-gifts-from-the-richest-pile

function pickGifts(gifts: number[], k: number): number {
  const pq = new MaxPriorityQueue();
  for(const gift of gifts) {
    pq.enqueue(gift);
  }
  while(k > 0) {
    k--;
    const largestGift = pq.dequeue().element;
    const remainder = Math.floor(Math.sqrt(largestGift));
    pq.enqueue(remainder);
  }
  return pq.toArray().map(item => item.element).reduce((a, b) => a + b);
};
