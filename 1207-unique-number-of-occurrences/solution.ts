// https://leetcode.com/problems/unique-number-of-occurrences/
// 1207-unique-number-of-occurrences

function uniqueOccurrences(arr: number[]): boolean {
  const freq = {};
  for(let n of arr) {
    freq[n] = (freq[n] ?? 0) + 1;
  }

  const set = new Set<number>();
  for(const count of Object.values(freq)) {
    if(set.has(+count)) {
      return false;
    }
    set.add(+count);
  }
  return true; 
};
