function judgeSquareSum(c: number): boolean {
  let lo = 0;
  let hi = Math.floor(Math.sqrt(c));
  while (lo <= hi) {
    const sum = lo ** 2 + hi ** 2;
    if(sum === c) {
      return true;
    }
    if(sum > c) {
      hi--;
      continue;
    }
    if(sum < c) {
      lo++;
      continue;
    }

  }
  return false;
};
