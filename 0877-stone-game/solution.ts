// https://leetcode.com/problems/stone-game/description/
// 0877-stone-game

function calculatePrefixSum(arr: number[]): number[] {
  const prefixSum = [...arr];
  for(let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] += prefixSum[i - 1];
  }
  return prefixSum;
}

function rangeSum(prefixSum: number[], start: number, end: number): number {
  return prefixSum[end] - (start > 0 ? prefixSum[start - 1] : 0);
} 

function stoneGame(piles: number[]): boolean {
  const n = piles.length;
  const cache = {};
  const prefixSum = calculatePrefixSum(piles);
  const maxStonesIfIGoFirst = (start: number, end: number): number  => {
    if(start === end) {
      return piles[start]
    }
    const key = `${start} ${end}`;
    if(cache[key] != null) {
      return cache[key];
    } 
    // take 1st pile
    const sum = rangeSum(prefixSum, start, end);

    const opponent1 = maxStonesIfIGoFirst(start + 1, end);
    const diff1 = sum - opponent1;

    // take last pile
    const opponent2 = maxStonesIfIGoFirst(start, end - 1);
    const diff2 = sum - opponent2;

    return cache[key] = Math.max(diff1, diff2);
  }

  const alice = maxStonesIfIGoFirst(0, n - 1);
  const bob = rangeSum(prefixSum, 0, n - 1) - alice;

  return alice > bob;
};
