// https://leetcode.com/problems/palindromic-substrings/
// 0647-palindromic-substrings

function countSubstrings(s: string): number {
  let res = 0;
  for(let i = 0; i < s.length; i++) {
    res += countPalindromes(s, i, i) + countPalindromes(s, i, i + 1);
  }
  return res;
};

function countPalindromes(s: string, lo: number, hi: number): number {
  let res = 0;
  while(lo >= 0 && hi <= s.length && s[lo] === s[hi]) {
    res++;
    lo--;
    hi++;
  }
  return res;
}
