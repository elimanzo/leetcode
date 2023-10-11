// https://leetcode.com/problems/second-largest-digit-in-a-string/
// 1796-second-largest-digit-in-a-string

function secondHighest(s: string): number {
  const res = [];
  for(const c of s) {
    if('0' <= c && c <= '9') {
      const curNum = Number(c);
      if(!res.includes(curNum)) {
        res.push(curNum);
        res.sort((a, b) => b - a);
        if(res.length > 2) {
          res.pop();
        }
      }
    }
  }
  return res[1] ?? -1;
};

// function secondHighest(s: string): number {
//   const onlyNums = [...new Set([...s].filter(isNumber).map(Number))];
//   let firstMax = -1;
//   let secondMax = -1;
//   for(const n of onlyNums) {
//     if(n > firstMax) {
//       secondMax = firstMax;
//       firstMax = n;
//       continue;
//     }
//     if(n > secondMax) {
//       secondMax = n;
//       continue;
//     }
//   }
//   return secondMax;
// };

// function isNumber(s: string): boolean {
//   return !isNaN(Number(s));
// }
