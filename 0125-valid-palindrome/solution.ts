// https://leetcode.com/problems/valid-palindrome/
// 0125-valid-palindrome

// function isPalindrome(s: string): boolean {
//   const letterStack = [...s].filter(isAlphaNum).map(toLower);
//   for(const c of s) {
//     if(isAlphaNum(c) && toLower(c) !== letterStack.pop()) {
//       return false;
//     }
//   }
//   return true;
// };

function isPalindrome(s: string): boolean {
  let lo = 0;
  let hi = s.length - 1;

  while (lo < hi) {
    if(!isAlphaNum(s[lo])) {
      lo++;
      continue;
    }

    if(!isAlphaNum(s[hi])) {
      hi--;
      continue;
    }

    if(toLower(s[lo++]) !== toLower(s[hi--])) {
      return false;
    }
  }
  return true;
};

function isAlphaNum(c: string): boolean {
  return ('0' <= c && c <= '9') || ('A' <= c && c <= 'Z') || ('a' <= c && c <= 'z');
}

function toLower(c: string): string {
  return ('A' <= c && c <= 'Z') ? String.fromCharCode(c.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0)) : c;
}
