// https://leetcode.com/problems/insert-interval/
// 0057-insert-interval

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let [ns, ne] = newInterval;
  const left = [];
  const right = [];
  for(const [s, e] of intervals) {
    if(e < ns) {
      left.push([s, e]);
      continue;
    }
    if(s > ne){
      right.push([s, e]);
      continue;
    }
    [ns, ne] = [Math.min(ns, s), Math.max(ne, e)];
  }

  return [...left, [ns, ne], ...right];
};
