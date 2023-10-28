// https://leetcode.com/problems/first-unique-character-in-a-string/
// 0387-first-unique-character-in-a-string

function firstUniqChar(s: string): number {
  let charChecked = 0;
  for(let i = 0; i < s.length; i++) {
    const c  = s[i];
    if((1 << charIndex(c)) & charChecked) {
      continue;
    }
    const count = getCount(c, s);
    if(count === 1) {
      return i;
    }
    charChecked |= (1 << charIndex(c));
  }
  return -1;
};

function charIndex(c: string): number {
  return parseInt(c, 36) - 10;
}

function getCount(c: string, s: string): number {
  let res = 0;
  for(const d of s) {
    if(c === d) {
      res++;
    }
  }
  return res;
}

// function firstUniqChar(s: string): number {
//   const freq: Record<string, number> = {};
//   for(const c of s) {
//     freq[c] = (freq[c] ?? 0) + 1;
//   }

//   for(let i = 0; i < s.length; i++) {
//     if(freq[s[i]] === 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// function firstUniqChar(s: string): number {
//   const freq: number[] = Array(26).fill(0);
//   for(let i = 0; i < s.length; i++) {
//     const c  = s[i];
//     freq[charIndex(c)]++;
//   }

//   for(let i = 0; i < s.length; i++) {
//     const c  = s[i];
//     if(freq[charIndex(c)] === 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// function charIndex(c: string): number {
//   return c.charCodeAt(0) - 'a'.charCodeAt(0);
// }
