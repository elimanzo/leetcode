// https://leetcode.com/problems/group-anagrams/
// 0049-group-anagrams

function groupAnagrams(strs: string[]): string[][] {
  const freq: Record<string, string[]> = {};
  for (const s of strs) {
    const count = new Array(26).fill(0);
    for(const c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = `${count}`;
    freq[key] ??= [];
    freq[key].push(s);
  }

  return Object.values(freq);
};
