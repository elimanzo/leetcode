// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/
// 1887-reduction-operations-to-make-the-array-elements-equal

function reductionOperations(nums: number[]): number {
  const freq = {};
  for(const n of nums) {
    freq[n] = (freq[n] ?? 0) + 1;
  }
  const values = Object.keys(freq).map(Number).sort((a, b) => a - b);
  let steps = 0;
  for(let i = 0; i < values.length; i++) {
    steps += i * freq[values[i]];
  }

  return steps;
};
