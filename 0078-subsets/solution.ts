// https://leetcode.com/problems/subsets/
// 0078-subsets

function subsets(nums: number[]): number[][] {
  const res = [];
  const path = [];

  const traverse = (i: number = 0) => {
    if(i === nums.length) {
      res.push([...path]);
      return;
    }

    path.push(nums[i]);
    traverse(i + 1);
    path.pop();
    traverse(i + 1);
  }
  traverse();
  return res;
};
