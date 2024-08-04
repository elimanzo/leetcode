function canBeEqual(target: number[], arr: number[]): boolean {
  const freq: Record<number, number> = {};
  for (const num of target) {
    freq[num] = (freq[num] ?? 0) + 1;
  }

  for (const num of arr) {
    if (freq[num] == null || freq[num] === 0) {
      return false;
    }
    freq[num]--;
  }

  return true;
};
