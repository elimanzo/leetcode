// https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/
// 1716-calculate-money-in-leetcode-bank

function totalMoney(n: number): number {
  let res = 0;
  let mondayRate = 0;
  for(let i = 0; i < n; i++) {
    if(i % 7 === 0) {
      mondayRate++;
    }
    res += i % 7 + mondayRate;
  }
  return res; 
};
