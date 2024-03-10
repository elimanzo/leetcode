// https://leetcode.com/problems/intersection-of-two-arrays
// 0349-intersection-of-two-arrays

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].map(n => set2.has(n) ? n : null).filter(n => n != null);
};
