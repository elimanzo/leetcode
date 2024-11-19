function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  const res = Array(n).fill(0);
  if (k === 0) {
    return res;
  }

  for (let i = 0; i < n; ++i) {
    if (k > 0) {
      for (let j = i + 1; j < i + k + 1; ++j) {
        res[i] += code[j % n];
      }
      continue;
    }
    for (let j = i - Math.abs(k); j < i; ++j) {
      res[i] += code[(j + n) % n];
    }
  }

  return res;
}
