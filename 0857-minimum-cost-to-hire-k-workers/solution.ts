function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  let res = Infinity;
  const ratios = quality.map((q, i) => [wage[i] / q, q]).sort((a, b) => a[0] - b[0]); 
  const pq = new MaxPriorityQueue();
  let totalQuality = 0;
  for(const [rate, q] of ratios) {
    pq.enqueue(q);
    totalQuality += q;

    if(pq.size() > k) {
      totalQuality -= pq.dequeue().element;
    }

    if(pq.size() === k) {
      res = Math.min(res, totalQuality * rate);
    }
    
  }
  return res;
};
