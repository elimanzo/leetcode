// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
// 2824-count-pairs-whose-sum-is-less-than-target

// function countPairs(nums: number[], target: number): number {
//   let counter = 0;
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j <= nums.length; j++) {
//       if((nums[i] + nums[j]) < target) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// };

function countPairs(nums: number[], target: number): number {
    // nums.sort((a, b) => a - b);
    const sortedNums = countSort(nums);
    let low = 0;
    let high = nums.length - 1;
    let counter = 0;

    while (low < high) {
        if(sortedNums[low] + sortedNums[high] < target) {  
            counter += high - low
            low++;
            continue;
        } 
        high--;
    }

    return counter;
};

function countSort(nums: number[]): number[] {
    let freq = {}

    for (const n of nums) {
        freq[n] = (freq[n] ?? 0) + 1
    }

    let res = [];

    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for(let val = min; val <= max; ++val) {
        for(let i = 0; i < (freq[val] ?? 0); ++i) {
            res.push(val);
        }
    }

    return res;
}
