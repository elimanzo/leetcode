// https://leetcode.com/problems/cheapest-flights-within-k-stops/
// 0787-cheapest-flights-within-k-stops

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  let prices = Array(n).fill(Infinity);
  prices[src] = 0;

  for(let i = 0; i < k + 1; i++) {
    const tempPrices = [...prices];
    for(const [s, d, p] of flights) {
      if(prices[s] === Infinity) {
        continue;
      }
      if(prices[s] + p < tempPrices[d]) {
        tempPrices[d] = prices[s] + p;
      }
    }
    prices = tempPrices;
  }

  return prices[dst] === Infinity ? -1 : prices[dst];
};
