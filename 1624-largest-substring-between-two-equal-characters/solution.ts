// https://leetcode.com/problems/largest-substring-between-two-equal-characters/
// 1624-largest-substring-between-two-equal-characters

function maxLengthBetweenEqualCharacters(s: string): number {
  const map = new Map<string, number>();
  let res = -1;
  for(let i = 0; i < s.length; i++) {
    const c = s[i];
    if(!map.has(c)) {
      map.set(c, i);
      continue;
    }
    res = Math.max(res, i - map.get(c) - 1);
  }  
  return res;
};

// res = -1
// s = "spottieottiedopaliscious"
// s: 0
// p: 1
// o: 2
// t: 3
// i: 5
// e: 6

// max(4 - 3 - 1) = 0
// max(7 - 2 - 1) = 4
