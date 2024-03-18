// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
// 0452-minimum-number-of-arrows-to-burst-balloons

function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  for(const point of points) {
    const prev = mergedIntervals.at(-1);
    if(prev == null || prev[1] < point[0]) {
      mergedIntervals.push(point);
      continue;
    }
    prev[0] = Math.min(prev[0], point[0]);
    prev[1] = Math.min(prev[1], point[1]);
  }
  return mergedIntervals.length;
};
