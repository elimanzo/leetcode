function groupAnagrams(strs: string[]): string[][] {
  const groupBy = (arr: string[]) => {
    const map = new Map();
    for (const s of arr) {
      const key = [...s].sort().join("");
      const value = map.get(key) ?? [];
      value.push(s);
      map.set(key, value);
    }
    return [...map.values()];
  }
  return groupBy(strs);
};
