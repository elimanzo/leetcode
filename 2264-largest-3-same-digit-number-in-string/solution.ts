// https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/
// 2264-largest-3-same-digit-number-in-string

function largestGoodInteger(num: string): string {
  let res = null;
  for(let i = 0; i < num.length - 2; i++) {
    if(num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      res = Math.max(res, +num[i]);
    }
  }
  return res == null ? '' : `${res}${res}${res}`;  
};
