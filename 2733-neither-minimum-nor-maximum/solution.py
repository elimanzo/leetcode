# https://leetcode.com/problems/neither-minimum-nor-maximum/description/
# 2733-neither-minimum-nor-maximum

class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        return self.solution1(nums)

    def solution(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return -1

        minNum = min(nums)
        maxNum = max(nums)
        
        return next(num for num in nums if num > minNum and num < maxNum)

    def solution1(self, nums: List[int]) -> int:
        return sorted(nums[:3])[1] if len(nums) >= 3 else -1       
