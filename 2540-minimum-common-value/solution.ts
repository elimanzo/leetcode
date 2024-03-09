// https://leetcode.com/problems/minimum-common-value/
// 2540-minimum-common-value

function getCommon(nums1: number[], nums2: number[]): number {
  let i = 0;
  let j = 0;
  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] < nums2[j]) {
      i++;
      continue;
    }
    if(nums1[i] > nums2[j]) {
      j++;
      continue;
    }
    return nums1[i];

  }
  return -1;
};
