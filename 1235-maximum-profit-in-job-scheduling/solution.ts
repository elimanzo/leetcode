// https://leetcode.com/problems/maximum-profit-in-job-scheduling/
// 1235-maximum-profit-in-job-scheduling

function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const n = startTime.length;
  const intervals = Array(n).fill(null).map((_, i) => [startTime[i], endTime[i], profit[i]]);
  intervals.sort((a, b) => a[0] - b[0]);
  const cache = {};
  const binarySearch = (i: number, target: number): number => {
    // intervals[lo][0] < target <= intervals[hi][0]
    let lo = i;
    let hi = n;
    while (lo + 1 !== hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (intervals[mid][0] < target) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    return hi;
  };

  const solve = (i: number): number => {
    if (i === n) {
      return 0;
    }
    if (cache[i] != null) {
      return cache[i];
    }

    // don't include
    let res = solve(i + 1);

    // include
    const nextJobIndex = binarySearch(i, intervals[i][1]);
    res = Math.max(res, intervals[i][2] + solve(nextJobIndex));

    return cache[i] = res;
  };
  return solve(0);
};
