// https://leetcode.com/problems/sequential-digits/
// 1291-sequential-digits
function sequentialDigits(low: number, high: number): number[] {
  const res = [];
  const q = Array(9).fill(null).map((_, i) => i + 1);
  let qi = 0;
  while(qi < q.length) {
    const n = q.shift();
    if(n > high) {
      continue;
    }
    if(low <= n && n <= high) {
      res.push(n);
    }
    let lastDigit = n % 10;
    if(lastDigit < 9) {
      q.push(n * 10 + (lastDigit + 1));
    }
  }
  return res;

};
