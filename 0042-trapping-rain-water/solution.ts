function trap(height: number[]): number {
  if(height.length === 0) {
    return 0;
  }
  let lo = 0;
  let hi = height.length - 1;
  let maxLo = height[lo];
  let maxHi = height[hi];
  let res = 0;
  while(lo < hi) {
    if(maxHi > maxLo) {
      lo++
      maxLo = Math.max(maxLo, height[lo]);
      res += maxLo - height[lo];
      continue;
    }
    hi--;
    maxHi = Math.max(maxHi, height[hi]);
    res += maxHi - height[hi];
  }
  return res;
};
