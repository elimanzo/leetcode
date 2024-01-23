// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters
// 1239-maximum-length-of-a-concatenated-string-with-unique-characters
function maxLength(arr: string[]): number {
  let res = 0;
  const solve = (start: number, curr: string): void => {
    if(curr.length !== new Set(curr).size) {
      return;
    }
    res = Math.max(res, curr.length);
    for(let i = start; i < arr.length; i++) {
      solve(i + 1, `${curr}${arr[i]}`);
    }
  }
  solve(0, '');
  return res;
};
