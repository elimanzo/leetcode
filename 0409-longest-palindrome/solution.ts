// https://leetcode.com/problems/longest-palindrome/
// 0409-longest-palindrome

function longestPalindrome(s: string): number {
  let res = 0;
  let unpaired = 0n;

  for(const c of s) {
    const bitmask = getBitMask(c);
    if(unpaired & bitmask) {
      res += 2;
      unpaired -= bitmask;
      continue;
    }
    unpaired += bitmask;
  }
  if(unpaired) {
    res++;
  }
  return res;
};

function getBitMask(c: string): bigint {
  if('a' <= c && c <= 'z') {
    return 1n << BigInt(c.codePointAt(0) - 'a'.codePointAt(0))
  }
  return 1n << BigInt(c.codePointAt(0) - 'A'.codePointAt(0) + 26)
}

// function longestPalindrome(s: string): number {
//   let res = 0;
//   const unpaired = new Set();

//   for(const c of s) {
//     if(unpaired.has(c)) {
//       res += 2;
//       unpaired.delete(c);
//       continue;
//     }
//     unpaired.add(c);
//   }
//   if(unpaired.size > 0) {
//     res++;
//   }
//   return res;
// };


// function longestPalindrome(s: string): number {
//   const freq: Record<string, number> = {};
//   for(const c of s) {
//     freq[c] = (freq[c] ?? 0) + 1;
//   }
//   let res = 0;
//   let leftOver = 0;
//   for(const count of Object.values(freq)) {
//     leftOver += count % 2;
//     res += count - (count % 2);
//   }
//   return res += leftOver >= 1 ? 1 : 0;
// };
