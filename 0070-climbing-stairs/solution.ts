// https://leetcode.com/problems/climbing-stairs/description/
// 0070-climbing-stairs

// let cache = {}

// function climbStairs(n: number): number {
 
//   if (n <= 2) {
//     return 1;
//   }
//   if(cache[n] != null) {
//     return cache[n];
//   }

//   cache[n] = climbStairs(n - 1) + climbStairs(n - 2)
//   return cache[n];

// };


// function climbStairs(n: number): number {
//   let [a, b] = [0, 1];
//   while (n > 0) {
//     [a, b] = [b, a + b];
//     n--;
//   }
//   return b;
// };

function climbStairs(n: number): number {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(phi ** (n + 1) / Math.sqrt(5));
};
