// https://leetcode.com/problems/complement-of-base-10-integer
// 1009-complement-of-base-10-integer

function bitwiseComplement(n: number): number {
  return base10(bitFlipper(binDigit(n)));
};

function* binDigit(n: number): Generator<number> {
  if (n === 0) {
    yield 0;
  }
  while (n > 0) {
    yield n % 2;
    n = Math.floor(n / 2);
  }
}

function* bitFlipper(bits: Iterable<number>): Generator<number>  {
  for (const bit of bits) {
    yield bit === 0 ? 1 : 0;
  }
}
function base10(bits: Iterable<number>): number {
  let power = 0;
  let res = 0;
  for(const bit of bits) {
    res += bit * (2 ** power);
    power++;
  }
  return res;
}

// function bitwiseComplement(n: number): number {
//   const bits = n.toString(2);
//   let bitsComplement = '';
//   for(const bit of bits) {
//     bitsComplement += bit === '0' ? '1' : '0';
//   }
//   return parseInt(bitsComplement, 2);
// };
