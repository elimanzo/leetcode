// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/
// 1523-count-odd-numbers-in-an-interval-range

function countOdds(low: number, high: number): number {
  if(low % 2 === 0) {
    low++;
  }
  if(high % 2 === 0) {
    high--;
  }
  return (high - low) / 2 + 1;
};

// function countOdds(low: number, high: number): number {
//   return ((high - low) >> 1) + ((low | high) & 1);
// };
