// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// 1893-check-if-all-the-integers-in-a-range-are-covered
function isCovered(intervals: number[][], left: number, right: number): boolean {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  for(const interval of intervals) {
    const prevInterval = mergedIntervals.at(-1);
    if(prevInterval == null || prevInterval[1] + 1 < interval[0]) {
      mergedIntervals.push(interval);
      continue;
    }
    prevInterval[1] = Math.max(prevInterval[1], interval[1]);
  }
  return mergedIntervals.some(([start, end]) => start <= left && right <= end);
};
