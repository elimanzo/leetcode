// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// 0744-find-smallest-letter-greater-than-target
function nextGreatestLetter(letters: string[], target: string): string {
  // letters[lo] <= target < letters[hi] 
  let lo = -1;
  let hi = letters.length;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(letters[mid] <= target) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return letters[hi % letters.length];
};
