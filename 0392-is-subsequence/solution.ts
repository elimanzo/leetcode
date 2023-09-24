// https://leetcode.com/problems/is-subsequence/
// 0392-is-subsequence
 
function isSubsequence(s, t) {
  let sIndex = 0;
  for(let tIndex = 0; tIndex < t.length && sIndex < s.length; tIndex++) {
    if(s[sIndex] === t[tIndex]) {
      sIndex++;
    }
  }

  return sIndex === s.length;
};




