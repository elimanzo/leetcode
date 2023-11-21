// https://leetcode.com/problems/count-nice-pairs-in-an-array/
// 1814-count-nice-pairs-in-an-array

function countNicePairs(nums: number[]): number {
    const freq = {};
    for(const n of nums) {
      const hash = hashCode(n);
      freq[hash] = (freq[hash] ?? 0) + 1;
    }

    let res = 0;
    for(const n of Object.values(freq)) {
      res += handshake(+n);
    }
    return res % (10 ** 9 + 7);
};

function rev(num: number): number {
  return +num.toString().split('').reverse().join('');
}

function hashCode(num: number): number {
  return num - rev(num);
}

function handshake(num: number): number {
  return num * (num - 1) / 2;
}
