// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// 1346-check-if-n-and-its-double-exist

function checkIfExist(arr: number[]): boolean {
    arr.sort((a, b) => a - b);
    for(const num of arr) {
      if(num != 0 && binarySearch(arr, num * 2)) {
        return true;
      }
    }
    const freq = _.countBy(arr);
    return freq[0] > 1;
};

function binarySearch(arr: number[], target: number): boolean {
  // lo side: everything < target
  // hi side: everything >= target
  // invariant: nums[lo] < target <= nums[hi]
  let lo = -1;
  let hi = arr.length;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(arr[mid] < target) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return hi < arr.length && arr[hi] === target;
}

// function checkIfExist(arr: number[]): boolean {
//   const freq = _.countBy(arr);
//   for(const key of Object.keys(freq)) {
//     if(key !== '0' && freq[+key * 2]) {
//       return true;
//     }
//   }
//   return freq[0] > 1;
// };

// function checkIfExist(arr: number[]): boolean {
//   const set = new Set();
//   return arr.some((n) => {
//     if(set.has(n / 2) || set.has(n * 2)) {
//       return true;
//     }
//     set.add(n);
//   });
// };
