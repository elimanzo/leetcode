// https://leetcode.com/problems/backspace-string-compare/
// 0844-backspace-string-compare

function backspaceCompare(s: string, t: string): boolean {
  const genS = backspaced(s);
  const genT = backspaced(t);
  while(true) {
    const sChar = genS.next();
    const tChar = genT.next();
    if(sChar.value !== tChar.value) {
      return false;
    }
    if(sChar.done && tChar.done) {
      break;
    }
  }
  return true;
};

function* backspaced(s: string): Generator<string> {
  let backspacedCounter = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === '#') {
      backspacedCounter++;
      continue;
    }
    if(backspacedCounter > 0) {
      backspacedCounter--;
      continue;
    }
      yield s[i];
  }
}

// function backspaceCompare(s: string, t: string): boolean {
//   return backspaced(s) === backspaced(t);
// };

// function backspaced(s: string): string {
//   const res = [];
//   for(const c of s) {
//     if(c !== '#') {
//       res.push(c);
//       continue;
//     }
//     res.pop();
//   }
//   return res.join('');
// }

