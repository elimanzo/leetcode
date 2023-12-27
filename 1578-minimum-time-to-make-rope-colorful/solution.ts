// https://leetcode.com/problems/minimum-time-to-make-rope-colorful
// 1578-minimum-time-to-make-rope-colorful

function minCost(colors: string, neededTime: number[]): number {
  let i = 0;
  let j = 1;
  const n = colors.length;
  let res = 0;
  while(i < n && j < n) {
    if(colors[i] === colors[j]) {
      if(neededTime[i] < neededTime[j]) {
        res += neededTime[i];
        i = j;
        j++;
        continue; 
      }
      res += neededTime[j];
      j++;
      continue;
    }
    i = j;
    j++;
  }
  return res;
};
