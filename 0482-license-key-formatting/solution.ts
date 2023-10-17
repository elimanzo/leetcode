// https://leetcode.com/problems/license-key-formatting/description/
// 0482-license-key-formatting

function licenseKeyFormatting(s: string, k: number): string {
  const cleanS = reverseString(s.replace(/-/g, '').toUpperCase());
  const regex = new RegExp('.{' + k + '}(?!$)', 'g');
  return reverseString(cleanS.replace(regex, m => m + '-'));
};

function reverseString(s: string): string {
  return s.split('').reverse().join('');
}

// function licenseKeyFormatting(s: string, k: number): string {
//   const res = [];
//   let counter = 0;
//   for(let i = s.length - 1; i >= 0; i--) {
//     const c = s[i];
//     if(c === '-') {
//       continue;
//     }
//     if(counter === k) {
//       counter = 0;
//       res.push('-');
//     }
//     counter++;
//     res.push(c.toUpperCase());
//   }
//   return res.reverse().join('');
// };

