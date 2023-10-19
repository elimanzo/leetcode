// https://leetcode.com/problems/next-greater-element-i/
// 0496-next-greater-element-i

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextLargest = {};
  const waitList = [];

  for(const n of nums2) {
    while(waitList.length !== 0 && waitList.at(-1) < n) {
      nextLargest[waitList.pop()] = n
    }
    waitList.push(n);
  }

  return nums1.map((item) => nextLargest[item] ?? -1);
};

// nums1 = [4,1,2], nums2 = [1,3,4,2,5]
// max = -inf nextLargest = {} waiting = []
// max = 1 nextLargest= {} waiting = [1] 
// max = 3 nextLargest = {1: 3} waiting = [3]
// max = 4 nextLargest = {1: 3, 3: 4} waiting [4]
// max = 4 nextLargest = {1: 3, 3: 4} waiting = [4, 2]
// max = 5 nextLargest = {1:3, 3:4, 4: 5, 2: 5} waiting = [5]

// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   const res = [];
//   for(let i = 0; i < nums1.length; i++) {
//     let localMax = -1;
//     for(let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
//       if(nums2[j] > nums1[i]) {
//         localMax = nums2[j];
//         break;
//       }
//     }
//     res.push(localMax);
//   }
//   return res;
// };
