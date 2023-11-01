// https://leetcode.com/problems/roman-to-integer/
// 0013-roman-to-integer

const VALUE = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

function romanToInt(s: string): number {
  let res = 0;
  let maxValue = null
  for(const n of reversed(s)) {
    if(maxValue == null || maxValue <= n) {
      maxValue = n;
      res += n;
      continue;
    }
    res -= n;
  }
  return res;
};

function* reversed(s: string): Generator<number> {
  for(let i = s.length - 1; i >= 0; i--) {
    yield VALUE[s[i]];
  }
}
