// https://leetcode.com/problems/baseball-game/description/
// 0682-baseball-game

function calPoints(operations: string[]): number {
  let res = [];
  let runningSum = 0;
  for(const operation of operations) {
    let val = null;
    if(operation === '+') {
      val = res.at(-1) + res.at(-2);
      res.push(val);
      runningSum += val;
      continue;
    }
    if(operation === 'D') {
      val = res.at(-1) * 2;
      res.push(val);
      runningSum += val;
      continue;
    }
    if(operation === 'C') {
      runningSum -= res.pop();
      continue;
    }
    res.push(+operation);
    runningSum += +operation;
    
  }
  return runningSum;
};
