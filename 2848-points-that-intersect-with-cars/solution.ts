// https://leetcode.com/problems/points-that-intersect-with-cars/
// 2848-points-that-intersect-with-cars

// sorting intervals almost always a good idea - O(n log n)
// interesting things only happen at endpoints - O(2 n points) = O(n)

// Pretend that you can only see one piece of input at a time
function numberOfPoints(intervals: number[][]): number {
  // a < b   return num < 0
  // a > b   return num > 0
  // a === b return 0
  // ascending  a - b
  // descending b - a
  intervals.sort((a, b) => a[0] - b[0]);
  let pointsTouched = 0;
  let firstAllowedPoint = -Infinity;
  for(const [start, end] of intervals) {
    if(start >= firstAllowedPoint) {
      pointsTouched += end - start + 1;
    } else if(end >= firstAllowedPoint) {
      pointsTouched += end - firstAllowedPoint + 1;
    }
    firstAllowedPoint = Math.max(firstAllowedPoint, end + 1);
  }
  return pointsTouched;
};

// function numberOfPoints(nums: number[][]): number {
//   const res = new Set();

//   for(const [start, end] of nums) {
//     for(let i = start; i <= end; i++) {
//       res.add(i);
//     }
//   }
//   return res.size;
// };


// function numberOfPoints(intervals: number[][]): number {
//   intervals.sort((a, b) => a[0] - b[0]);
//   const mergeIntervals = [];
//   for(const interval of intervals) {
//     const prevInterval = mergeIntervals.at(-1);
//     if(prevInterval == null || prevInterval[1] < interval[0]) {
//       mergeIntervals.push(interval);
//       continue;
//     }
//     prevInterval[1] = Math.max(prevInterval[1], interval[1]);
//   }
//   return sum(mergeIntervals.map(pointsTouched));
// };

// function pointsTouched([start, end]: [number, number]): number {
//   return end - start + 1;
// }

// function sum(nums: number[]): number {
//   return nums.reduce((a, b) => a + b);
// }
