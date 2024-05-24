function subsets(nums: number[]): number[][] {
  const res = [];
  const backtrack = (start: number, subset: number[]): void => {
    res.push([...subset]);
    for(let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  }
  backtrack(0, []);
  return res; 
};
