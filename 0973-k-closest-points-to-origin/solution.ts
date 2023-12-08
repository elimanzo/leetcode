// https://leetcode.com/problems/k-closest-points-to-origin/
// 0973-k-closest-points-to-origin

function kClosest(points: number[][], k: number): number[][] {
  const pq = new MaxPriorityQueue();
  for(const [x, y] of points) {
    const distance = Math.sqrt((x - 0) ** 2 + (y - 0) ** 2);
    pq.enqueue([x, y], distance);
    if(pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.toArray().map(e => e.element);
};
