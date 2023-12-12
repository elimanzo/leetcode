// https://leetcode.com/problems/knight-dialer/
// 0935-knight-dialer

const NEXTS = [
  [4, 6],
  [6, 8],
  [7, 9],
  [4, 8],
  [9, 3, 0],
  [],
  [1, 7, 0],
  [2, 6],
  [1, 3],
  [2, 4],
]

const MOD = 10 ** 9 + 7;
function knightDialer(n: number): number {
  let res = 0;
  for(let i = 0; i < NEXTS.length; i++) {
    res += knightDialerStartingFrom(i, n - 1);
    res %= MOD;
  }
  return res;
};

const cache = {};
function knightDialerStartingFrom(pos: number, moves: number): number {
  if(moves === 0) {
    return 1;
  }
  const key = `${pos}-${moves}`;
  if(cache[key] != null) {
    return cache[key];
  }

  let res = 0;
  for(const next of NEXTS[pos]) {
    res += knightDialerStartingFrom(next, moves - 1);
    res %= MOD;
  }
  cache[key] = res;
  return res;
}
