// https://leetcode.com/problems/binary-gap/description/
// 0868-binary-gap

function binaryGap(n: number): number {
  return Math.max(0, 
    ...Array.from(n.toString(2).matchAll(/(?<=1)0*(?=1)/g)).map(([match]) => match.length + 1),
  );
};

// function binaryGap(n: number): number {
//   let res = 0;
//   let prev = null;
//   const bin = n.toString(2);
//   for(let i = 0; i < bin.length; i++) {
//     if(bin[i] === '0') {
//       continue;
//     }
//     if(prev != null) {
//       res = Math.max(res, i - prev);
//     }
//     prev = i;
//   }
//   return res;
// };

// function* getDigitWithLogs(n: number): Generator<number> {
//   let dIndex = 1 + Math.floor(Math.log2(n));
//   while (dIndex > 0) {
//     if(Math.floor(n / 2 ** --dIndex) % 2) {
//       yield dIndex;
//     };
//   }
// }
