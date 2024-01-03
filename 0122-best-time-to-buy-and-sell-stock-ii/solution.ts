// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// 0122-best-time-to-buy-and-sell-stock-ii
function maxProfit(prices: number[]): number {
  let res = 0;
  for(let i = 1; i < prices.length; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]);
  }
  return res;
};
