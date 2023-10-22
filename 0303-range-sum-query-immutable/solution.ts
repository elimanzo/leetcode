// https://leetcode.com/problems/range-sum-query-immutable/
// 0303-range-sum-query-immutable

class NumArray {
    sumOfNums: Record<number, number> = {};
    constructor(nums: number[]) {
      this.sumOfNums[0] = nums[0];
      for(let i = 1; i < nums.length; i++) {
        this.sumOfNums[i] = this.sumOfNums[i - 1] + nums[i];
      }
      console.log(this.sumOfNums)
    }

    sumRange(left: number, right: number): number {
      return this.sumOfNums[right] - (this.sumOfNums[left - 1] ?? 0);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
