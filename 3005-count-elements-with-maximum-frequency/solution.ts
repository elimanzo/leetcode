// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// 3005-count-elements-with-maximum-frequency
function maxFrequencyElements(nums: number[]): number {
  const freq: Record<number, number> = {};
  let maxFreq = 0;
  for(const n of nums) {
    freq[n] = (freq[n] ?? 0) + 1;
    maxFreq = Math.max(maxFreq, freq[n]);
  }
  return Object.values(freq).reduce((a, b) => a + (b === maxFreq ? b : 0), 0);
};
