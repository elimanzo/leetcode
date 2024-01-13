// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
// 1347-minimum-number-of-steps-to-make-two-strings-anagram

function minSteps(s: string, t: string): number {
  const freq: Record<string, number> = {};
  for(const c of s) {
    freq[c] = (freq[c] ?? 0) + 1;
  }
  for(const c of t) {
    freq[c] = (freq[c] ?? 0) - 1;
  }

  let res = 0;
  for(const count of Object.values(freq)) {
    res += Math.max(0, count);
  }
  return res;
};
