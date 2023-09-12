// https://leetcode.com/problems/length-of-last-word/description/
// 0058-length-of-last-word

function lengthOfLastWord(s: string): number {
  let counter = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === ' ' && counter !== 0) {
      break;
    }
    if (s[i] !== ' ') {
      counter++;
    }
  }
  return counter;
};

// function lengthOfLastWord(s: string): number {
//   return s.trim().split(' ').pop().length;
// };
