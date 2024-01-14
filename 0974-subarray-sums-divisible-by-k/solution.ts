// https://leetcode.com/problems/subarray-sums-divisible-by-k/description/
// 0974-subarray-sums-divisible-by-k

function subarraysDivByK(nums: number[], k: number): number {
  const freq: Record<number, number> = {};
  freq[0] = 1;

  let prefixSum = 0;
  for(const num of nums) {
    prefixSum += num;
    const mod = ((prefixSum % k) + k) % k;
    freq[mod] = (freq[mod] ?? 0) + 1;
  }

  let res = 0;
  for(const count of Object.values(freq)) {
    res += count * (count - 1) / 2;
  }
  return res;
};
