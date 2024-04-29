function minOperations(nums: number[], k: number): number {
  // a ^ b = c
  // b ^ c = a
  let xor = 0;
  for(const num of nums) {
    xor ^= num;
  }
  xor ^= k;
  let res = 0;
  while(xor > 0) {
    res += xor & 1;
    xor >>= 1;
  }
  return res;
};

  //   odd = 1
  //   even = 0

  //   2: 010
  //   1: 001
  //   3: 011
  //   4: 100
  //   _______
  //      100
  //   k: 001

  // a ^ b = c
  // a ^ c = b
  // b ^ c = a

  // Our Case: a ^ c = b
  // a ^ b = c

  //   100
  // ^ 001
  // ______
  //   101 = 2 ones

  // ex 

  // [2, 3, 5, 15]   k = 10
  // 2 -    0010     k = 10 - 1010
  // 3 -    0011
  // 5 -    0101
  // 15 -   1111
  // xor =  1011
  //      ^ 1010
  //       = 0001
