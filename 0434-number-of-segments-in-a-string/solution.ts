// https://leetcode.com/problems/number-of-segments-in-a-string/
// 0434-number-of-segments-in-a-string

// function countSegments(s: string): number {
//   return s.split(' ').filter(word => word.trim()).length;
// };

// function countSegments(s: string): number {
//   let counter = 0;
//   let lastChar = ' ';

//   for(const c of s) {
//     if((c !== ' ' && lastChar === ' ')) {
//       counter++;
//     }
//     lastChar = c;
//   }
  
//   return counter;
// };

function countSegments(s: string): number {
  return s.match(/\S+/g)?.length ?? 0;
};
