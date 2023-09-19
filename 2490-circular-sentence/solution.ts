// https://leetcode.com/problems/circular-sentence/
// 2490-circular-sentence

function isCircularSentence(sentence: string): boolean {
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === ' ' && sentence[i + 1] !== sentence[i - 1]) {
      return false;
    }
  }
  return sentence[0] === sentence.at(-1);
};

// function isCircularSentence(sentence: string): boolean {
//   const words = sentence.split(' ');
//   const n = words.length;
  
//   if(words[0][0] !== words[n - 1].at(-1)) {
//     return false;
//   }
//   for(let i = 1; i < n; i++) {
//     const cur = words[i];
//     const prev = words[i - 1];
//     if(cur[0] !== prev.at(-1)) {
//       return false;
//     }
//   }

//   return true;
// };

// function isCircularSentence(sentence: string): boolean {
//   const words = sentence.split(' ');
//   const n = words.length;
//   for(let i = 0; i < n; i++) {
//     const curW = words[i];
//     const nextW = words[(i + 1) % 2];
//     if(curW.at(-1) !== nextW[0]) {
//       return false;
//     }
//   }

//   return true;
// };
