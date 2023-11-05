// https://leetcode.com/problems/koko-eating-bananas
// 0875-koko-eating-bananas

function minEatingSpeed(piles: number[], h: number): number {
  let lo = 0;
  let hi = Math.max(...piles);
  const isGoodEnough = (mid: number) => {
    return piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0) <= h;
  }
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(isGoodEnough(mid)) {
      hi = mid;
    } else {
      lo = mid
    }
  }
  return hi;
};
