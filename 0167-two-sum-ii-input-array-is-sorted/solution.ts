function twoSum(numbers: number[], target: number): number[] {
  let lo = 0;
  let hi = numbers.length - 1;
  while(lo < hi) {
    const sum = numbers[lo] + numbers[hi];
    if(sum > target) {
      --hi;
      continue;
    }
    if(sum < target) {
      ++lo;
      continue;
    }
    return [lo + 1, hi + 1];
  }
};
