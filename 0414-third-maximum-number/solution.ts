// https://leetcode.com/problems/third-maximum-number/
// 0414-third-maximum-number

function thirdMax(nums: number[]): number {
  return kthMax(nums, 3);
};

// function kthMax(nums: number[], k: number): number {
//   const res = [];
//   for(const n of nums) {
//     if(!res.includes(n)) {
//       res.push(n);
//       res.sort((a, b) => b - a);
//       if(res.length > k) {
//         res.pop();
//       }
//     }
//   }
//   return res.at(res.length < k ? 0 : k - 1);
// }

// function thirdMax(nums: number[]): number {
//   const sortedDistinct = [...new Set(nums)].sort((a, b) => a - b);
//   return sortedDistinct.length < 3 ? sortedDistinct.at(-1) : sortedDistinct.at(-3);
// };

function kthMax(nums: number[], k: number): number {
  const maxesQueue = new MinPriorityQueue();
  const maxesSet = new Set<number>();

  for (const num of nums) {
    if (!maxesSet.has(num)) {
      maxesQueue.enqueue(num);
      maxesSet.add(num);

      if (maxesQueue.size() > k) {
        maxesSet.delete(maxesQueue.dequeue().element);
      }
    }
  }

  return (maxesQueue.size() >= k ? maxesQueue.front() : maxesQueue.back()).element;
}
