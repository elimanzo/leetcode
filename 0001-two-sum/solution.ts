function twoSum(nums: number[], target: number): [number, number] {
  const dict: Record<number, number> = {};
  for(let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if(dict[compliment] != null) {
      return [i, dict[compliment]];
    }
    dict[nums[i]] = i;
  }
};

// function twoSum(nums: number[], target: number): [number, number] {
//   const numsWithIndex= nums.map((num, i) => [num, i]);
//   numsWithIndex.sort((a, b) => a[0] - b[0]);
//   let i = 0;
//   let j = nums.length - 1;
//   while (i < j) {
//     const sum = numsWithIndex[i][0] + numsWithIndex[j][0];
//     if(sum > target) {
//       j--;
//       continue;
//     }
//     if(sum < target) {
//       i++;
//       continue;
//     }
//     return [numsWithIndex[i][1], numsWithIndex[j][1]];
//   }
// };
