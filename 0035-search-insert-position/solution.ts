// https://leetcode.com/problems/search-insert-position/
// 0035-search-insert-position

function searchInsert(nums: number[], target: number): number {
  // 1. Come up with a 'rule' (inequality) to describe the relation between lo, hi, 
  // and what we're looking for.
  // 2. Pick an initial lo and high that follow this rule
  // 3. Inside the while loop, check which side of the rule is mid on
  let lo = -1;
  let hi = nums.length;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);

    if(nums[mid] <= target) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo >= 0 && nums[lo] === target ? lo : lo + 1;
};


// function searchInsert(nums: number[], target: number): number {
//   // 1. Come up with a 'rule' (inequality) to describe the relation between lo, hi, 
//   // and what we're looking for.
//   // 2. Pick an initial lo and high that follow this rule
//   let lo = -1;
//   let hi = nums.length;
//   while(lo + 1 !== hi) {
//     const mid = Math.floor((lo + hi) / 2);

//     if(nums[mid] < target) {
//       lo = mid;
//     } else {
//       hi = mid;
//     }
//   }
//   return hi;
// };

// function searchInsert(nums: number[], target: number): number {
//   for(let i = 0; i < nums.length; i++) {
//     if(target <= nums[i]) {
//       return i;
//     }
//   }
//   return nums.length;
// };
