// https://leetcode.com/problems/count-integers-with-even-digit-sum/
// 2180-count-integers-with-even-digit-sum

function countEven(num: number): number {
  let res = Math.floor((num + 1) / 2) - 1;
  if(num % 2 === 0 && digitSum(num) % 2 === 0) {
    res++;
  }
  return res;
};

function digitSum(n: number): number {
  let res = 0;
  for(const d of getDigit(n)) {
    res += d;
  }
  return res;
}

function* getDigit(n: number): Generator<number> {
  while(n > 0) {
    yield n % 10;
    n = Math.floor(n / 10);
  }
}
