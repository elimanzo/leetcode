// https://leetcode.com/problems/longest-harmonious-subsequence/
// 0594-longest-harmonious-subsequence

function findLHS(nums: number[]): number {
  const freq: Record<number, number> = {};
  for(const n of nums) {
    freq[n] = (freq[n] ?? 0) + 1;
  }
  let res = 0;
  for(const key of Object.keys(freq)) {
    const diffOneMin = freq[key];
    const diffOneMax = freq[Number(key) + 1];
    if(diffOneMax != null) {
      res = Math.max(res, diffOneMin + diffOneMax);
    }
  }
  return res;
};

// function findLHS(nums: number[]): number {
//   nums.sort((a, b) => a - b);
//   let res = 0;
//   let left = 0;
//   let right = 1;
//   while(right < nums.length) {
//     const diff = nums[right] - nums[left];
//     if(diff === 1) {
//       res = Math.max(res, right - left + 1)
//       right++;
//       continue;
//     } 
//     if (diff === 0) {
//       right++;
//       continue;
//     }
//     left++;
    
//   }
//   return res;
// };

// [1,3,2,2,5,2,3,7]
// '1':1 '3':2 '2':3 '5':1 '7':1

// 1 2 2 2 3 3 5 7
// nums[left] = 1 
// maxLen = 2
// maxLen = 3
// maxLen = 4

// nums[left] = 2
// maxLen = 4
// maxLen = 5

