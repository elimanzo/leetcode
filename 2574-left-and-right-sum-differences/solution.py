# https://leetcode.com/problems/left-and-right-sum-differences/description/

class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        return self.solution1(nums)

    def solution0(self, nums: List[int]) -> List[int]:
        leftSum = [0]
        rightSum = [sum(nums) - nums[0]]
        res = [abs(leftSum[0] - rightSum[0])]

        for i in range(1, len(nums)):
            leftSum.append(leftSum[i - 1] + nums[i - 1])
            rightSum.append(rightSum[i - 1] - nums[i])
            res.append(abs(leftSum[i] - rightSum[i]))

        return res

    def solution1(self, nums: List[int]) -> List[int]:
        left = 0
        right = sum(nums)
        res = []

        for i in range(len(nums)):
            left += nums[i]
            res.append(abs(left - right))
            right -= nums[i]
        
        return res