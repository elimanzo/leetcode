// https://leetcode.com/problems/daily-temperatures/
// 0739-daily-temperatures

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  const stack = [];
  for(let i = 0 ; i < n; i++) {
    while(stack.length !== 0 && temperatures[stack.at(-1)] < temperatures[i]) {
      const l = stack.pop();
      res[l] = i - l;
    }
    stack.push(i);
  }
  return res;
};
