// https://leetcode.com/problems/reverse-only-letters/
// 0917-reverse-only-letters

// function reverseOnlyLetters(s: string): string {
//   let left = 0;
//   let right = s.length - 1;
//   const res = [...s];
//   while(left < right) {
//     if(!isLetter(res[left])) {
//       left++;
//       continue;
//     }
//     if(!isLetter(res[right])) {
//       right--;
//       continue;
//     }

//     [res[left++], res[right--]] = [res[right], res[left]]
//   }
//   return res.join('')
// };

function reverseOnlyLetters(s: string): string {
  const stackOfLetters = [];
  for(const c of s) {
    if(isLetter(c)) {
      stackOfLetters.push(c);
    }
  }

  const res = [];

  for (const c of s) {
    res.push(isLetter(c) ? stackOfLetters.pop() : c);
  }

  return res.join('');
};

function isLetter(c: string): boolean {
  return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
}
