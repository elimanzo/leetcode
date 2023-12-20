// https://leetcode.com/problems/buy-two-chocolates/
// 2706-buy-two-chocolates

function buyChoco(prices: number[], money: number): number {
  let min1 = Infinity;
  let min2 = Infinity;
  for(const price of prices) {
    if(price < min1) {
      min2 = min1;
      min1 = price;
    } else {
      min2 = Math.min(price, min2);
    }
  }
  const twoCheapestChocolate = min1 + min2;
  return twoCheapestChocolate > money ? money : money - twoCheapestChocolate;
};
