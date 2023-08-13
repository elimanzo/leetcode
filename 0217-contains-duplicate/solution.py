# https://leetcode.com/problems/contains-duplicate/description/

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return self.solution0(nums)

        
    def solution0(self, nums: List[int]) -> bool:
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i - 1] == nums[i]:
                return True
        return False

    def solution1(self, nums: List[int]) -> bool:
        return len(set(nums)) != len(nums)