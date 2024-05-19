function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  let res =  nums.reduce((a, b) => a + b, 0);
  const delta = nums.map((n) => (n ^ k) - n).sort((a, b) => b - a);
  for(let i = 1; i < delta.length; i+=2) {
    const deltaSum = delta[i] + delta[i - 1];
    if(deltaSum > 0) {
      res += deltaSum;
    }
  }
  return res;
};
