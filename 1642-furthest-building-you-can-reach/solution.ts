// https://leetcode.com/problems/furthest-building-you-can-reach/
// 1642-furthest-building-you-can-reach

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const n = heights.length;
  const pq = new MaxPriorityQueue();
  for(let i = 0; i < n - 1; i++) {
    const diff = heights[i + 1] - heights[i];
    if(diff <= 0) {
      continue;
    }
    bricks -= diff;
    pq.enqueue(diff);

    if(bricks < 0) {
      if(ladders === 0) {
        return i;
      }
      ladders--;
      bricks += pq.dequeue().element;
    }
  }
  return n - 1;
};
