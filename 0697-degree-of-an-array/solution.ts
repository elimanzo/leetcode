// https://leetcode.com/problems/degree-of-an-array/description/
// 0697-degree-of-an-array

function findShortestSubArray(nums: number[]): number {
  const freq: Record<number, [number, number, number]> = {};
  for(let i = 0; i < nums.length; i++) {
    freq[nums[i]] ??= [i, i, 0];
    freq[nums[i]][2]++;
    freq[nums[i]][1] = i;
  }

  let max = Math.max(...Object.values(freq).map(([,,count]) => count));

  let ourMin = nums.length;
  for(const n of Object.keys(freq).map(Number)) {
    if(freq[n][2] !== max) {
      continue;
    }
    const [firstIndex, lastIndex] = freq[n];
    ourMin = Math.min(lastIndex - firstIndex + 1, ourMin);
  }
  return ourMin;
};
