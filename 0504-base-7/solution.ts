// https://leetcode.com/problems/base-7/
// 0504-base-7

function* getDigitForward(n: number, base: number): Generator<number> {
  if(n === 0) {
    yield 0;
    return;
  }
  while (n > 0) {
    yield n % base;
    n = Math.floor(n / base);
  }
}

function* getDigitBackwards(n: number, base:number): Generator<number> {
  if(n === 0) {
    yield 0;
    return;
  }

  let digLen = Math.floor(Math.log(n) / Math.log(base)) + 1;
  while (digLen > 0) {
    yield Math.floor(n / base ** --digLen) % base
  }
}
function convertToBase7(num: number): string {
  return num.toString(7);
};
