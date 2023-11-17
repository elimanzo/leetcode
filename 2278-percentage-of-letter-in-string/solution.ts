// https://leetcode.com/problems/percentage-of-letter-in-string/description/
// 2278-percentage-of-letter-in-string

function percentageLetter(s: string, letter: string): number {
  return getLetterPercentage(s).get(letter) ?? 0;
}

function getLetterPercentage(s: string): Map<String, number> {
  const res = new Map();
  for(const c of s) {
    res.set(c , (res.get(c) ?? 0) + 1);
  }
  for(const [c , count] of res.entries()) {
    res.set(c, Math.floor(100 * count / s.length));
  }
  return res;
}

// function percentageLetter(s: string, letter: string): number {
//   let count = 0;
//   for(const c of s) {
//     if(c === letter) {
//       count++;
//     }
//   }
//   return Math.floor(count * 100 / s.length) ;
// };
