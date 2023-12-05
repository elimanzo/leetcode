// https://leetcode.com/problems/count-of-matches-in-tournament/
// 1668-count-of-matches-in-tournament

function numberOfMatches(n: number): number {
  return n - 1;
};

// function numberOfMatches(n: number): number {
//   let matches = 0;
//   while(n > 1) {
//     if(n % 2 === 0) {
//       matches += Math.floor(n / 2);
//       n = Math.floor(n / 2);
//       continue;
//     }
//     matches += Math.floor((n - 1) / 2);
//     n = Math.floor((n - 1) / 2 + 1);
//   }
//   return matches;
// };
