// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
// 1561-maximum-number-of-coins-you-can-get

function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  let res = 0;
  const bobsCoins = Math.floor(piles.length / 3);
  while(piles.length > bobsCoins) {
    piles.pop();
    res += piles.pop()
  }
  return res;
};
