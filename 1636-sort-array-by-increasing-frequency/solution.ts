function frequencySort(nums: number[]): number[] {
  const freq: Record<number, number> = {};
  for (const num of nums) {
    freq[num] = (freq[num] ?? 0) + 1;
  }
  
  const res = Object.entries(freq);
  res.sort((a, b) => {
    const comparator = a[1] - b[1];
    if (comparator !== 0) {
      return comparator;
    }
    return Number(b[0]) - Number(a[0]);
  });

  return res.reduce((acc, [num, count]) => {
    acc.push(...Array(count).fill(Number(num)));
    return acc;
  }, []);
};
