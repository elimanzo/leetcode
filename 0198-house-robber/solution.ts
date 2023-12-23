// https://leetcode.com/problems/house-robber/
// 0198-house-robber

function rob(nums: number[]): number {
  const n = nums.length;

  const cache = Array(n).fill(null).map(() => Array(n).fill(null));

  return robHelper(nums, 0, n - 1, cache);
}

function robHelper(
  nums: number[],
  first: number,
  last: number,
  cache: (number | null)[][],
): number {
  if (first > last) {
    return 0;
  }

  if (first === last) {
    return nums[first];
  }

  if (cache[first][last] != null) {
    return cache[first][last];
  }

  let res = 0;
  for (let i = first; i <= last; ++i) {
    // What happens if I rob this house first?
    let money = nums[i];

    money += robHelper(nums, first, i - 2, cache);
    money += robHelper(nums, i + 2, last, cache);

    res = Math.max(res, money);
  }

  cache[first][last] = res;
  return res;
}
