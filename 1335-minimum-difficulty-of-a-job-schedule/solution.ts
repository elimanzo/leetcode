// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule
// 1335-minimum-difficulty-of-a-job-schedule

function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if(d > n) {
    return -1;
  }
  const cache = {};
  const solve = (i: number, dLeft: number, curMax: number): number => {
    if(i === n) {
      return dLeft === 0 ? 0 : Infinity;
    }
    if(dLeft === 0) {
      return Infinity;
    }
    const key = `${i} ${dLeft} ${curMax}`;
    if(cache[key] != null) {
      return cache[key];
    }
    curMax = Math.max(curMax, jobDifficulty[i]);
    const res = Math.min(
      solve(i + 1, dLeft, curMax), // Continue The Day
      curMax + solve(i + 1, dLeft - 1, -1), // End the Day
    );
    return cache[key] ??= res;
  }
  return solve(0, d, -1);
};
