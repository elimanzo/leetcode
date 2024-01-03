// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// 0121-best-time-to-buy-and-sell-stock
function maxProfit(prices: number[]): number {
  let res = 0;
  let cheapestStock = Infinity;
  for(const p of prices) {
    res = Math.max(res, p - cheapestStock); 
    cheapestStock = Math.min(cheapestStock, p);
  }
  return res;
};
