function minimizedMaximum(n: number, quantities: number[]): number {
  let lo = -1;
  let hi = Math.max(...quantities);
  while (lo + 1 !== hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (quantities.reduce((a, quantity) => a + Math.ceil(quantity / mid), 0) > n) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return hi;
};
