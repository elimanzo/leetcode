function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);

  const isPossible = (dist: number): boolean => {
    let last = -Infinity;
    let balls = 0;
    for(const pos of position) {
      if(pos < last + dist) {
        continue;
      }
      balls++;
      last = pos;
    }
    return balls >= m;
  }

  let lo = 0;
  let hi = position.at(-1) - position.at(0) + 1;
  while(lo + 1 !== hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if(isPossible(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
};
