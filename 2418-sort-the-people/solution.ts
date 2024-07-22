function sortPeople(names: string[], heights: number[]): string[] {
  const res: [string, number][] = names.map((n, i) => [n, heights[i]]);
  res.sort((a, b) => b[1] - a[1])
  return res.map((e) => e[0]);
};
