// https://leetcode.com/problems/truncate-sentence/
// 1816-truncate-sentence

function truncateSentence(s: string, k: number): string {
  return s.match(/\S+/g).slice(0, k).join(' ');
};

// function truncateSentence(s: string, k: number): string {
//   let spaceCounter = 0;
//   for(let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if(c === ' ') {
//       spaceCounter++;
//     }
//     if(spaceCounter === k) {
//       return s.slice(0, i);
//     }
//   }
//   return s;
// };

// function truncateSentence(s: string, k: number): string {
//   return s.split(' ').slice(0, k).join(' ');
// };
