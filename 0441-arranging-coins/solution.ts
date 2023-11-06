// https://leetcode.com/problems/arranging-coins/description/
// 0441-arranging-coins

function arrangeCoins(n: number): bigint {
  // complete rows have 1 + 2 + 3 + 4 ... + k = k ( k + 1 ) / 2
  // lo * (lo + 1) / 2 <= n < hi * (hi + 1) / 2
  let lo = 0n;
  let hi = BigInt(n) + 1n;
  while(lo + 1n !== hi) {
    const mid = lo + ((hi - lo) >> 1n);
    if(mid * (mid + 1n) / 2n <= n) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
};
