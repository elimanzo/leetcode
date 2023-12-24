// https://leetcode.com/problemsminimum-changes-to-make-alternating-binary-string/
// 1758-problemsminimum-changes-to-make-alternating-binary-string

function minOperations(s: string): number {
  let onesStart = 0;
  let zerosStart = 0;
  for(let i = 0; i < s.length; i++) {
    if(i % 2 === 0) {
      if(s[i] === '0') {
        onesStart++
      } else {
        zerosStart++;
      }
    } else {
      if(s[i] === '1') {
        onesStart++
      } else {
        zerosStart++;
      }
    }
  }

  return Math.min(zerosStart, onesStart);
};
