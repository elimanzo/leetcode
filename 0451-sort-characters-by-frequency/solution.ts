// https://leetcode.com/problems/sort-characters-by-frequency/
// 0451-sort-characters-by-frequency

function frequencySort(s: string): string {
  const freq = _.countBy(s);
  const pq = new MaxPriorityQueue();

  for(const [key, val] of Object.entries(freq)) {
    pq.enqueue([key, val], val);
  }

  return pq.toArray().map(e => e.element[0].repeat(e.element[1])).join('');
};
