// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/
// 2220-minimum-bit-flips-to-convert-number

function minBitFlips(start: number, goal: number): number {
  return hammingWeight(start ^ goal);
};

function hammingWeight(n: number): number {
  let res = 0;
  while(n > 0) {
    n &= n - 1;
    res++;
  }
  return res;
}

// function minBitFlips(start: number, goal: number): number {
//   let res = 0;
//   for(const [startBit, goalBit] of zipBits(getBits(start), getBits(goal))) {
//     if(startBit !== goalBit) {
//       res++;
//     }
//   }
//   return res;
// };

// function* getBits(n: number): Generator<number> {
//   while(n > 0) {
//     yield n % 2;
//     n = Math.floor(n / 2);
//   }
// }

// function* zipBits(start: Generator<number>, goal: Generator<number>): Generator<[number, number]> {
//   while(true) {
//     const a = start.next();
//     const b = goal.next();
//     if(a.done && b.done) {
//       break;
//     }
//     yield [a.value ?? 0, b.value ?? 0];
//   }
// }
