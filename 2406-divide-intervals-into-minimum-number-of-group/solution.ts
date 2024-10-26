function minGroups(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  const groups = new MinPriorityQueue();

  for(const interval of intervals) {
    if(!groups.isEmpty() && interval[0] > groups.front().element[1]) {
      groups.dequeue();
    }
    groups.enqueue(interval, interval[1]);
  }
  return groups.size();
};
