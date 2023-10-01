// https://leetcode.com/problems/count-pairs-of-similar-strings/
// 2506-count-pairs-of-similar-strings

function similarPairs(words: string[]): number {
  const freq: Record<string, number> = {};
  for(const word of words) {
    const unique = bitMap(word);
    freq[unique] = (freq[unique] ?? 0) + 1;
  }
  let res = 0;
  for(const groupSize of Object.values(freq)) {
    res += groupSize * (groupSize - 1) / 2;
  }
  return res;
};

function bitMap(s: string): number {
  let bitMask = 0;
  for(const c of s) {
    const letterSpot = c.codePointAt(0) - 'a'.codePointAt(0);
    bitMask |= (1 << letterSpot)
  }
  return bitMask;
}

function getCluster(s: string): string { 
  const uniqueLetters = new Set(s); 
  return Array.from(uniqueLetters).sort().join('');
}
