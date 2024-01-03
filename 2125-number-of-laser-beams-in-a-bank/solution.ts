// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/
// 2125-number-of-laser-beams-in-a-bank

function numberOfBeams(bank: string[]): number {

  const freq = [];
  for(const s of bank) {
    let count = 0;
    for(const c of s) {
      if(c === "1") {
        count++;
      }
    }
    if(count === 0) {
      continue;
    }
    freq.push(count);
  }
  let res = 0;
  for(let i = freq.length - 1; i > 0; i--) {
    res += freq[i] * freq[i - 1];
  }
  return res;
};
