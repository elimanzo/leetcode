# https://leetcode.com/problems/number-of-good-pairs/description/
# 1512-number-of-good-pairs

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        return self.solution3(nums)
    
    def solution(self, nums: List[int]) -> int:
        res = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == nums[i]:
                    res += 1
        return res
    
    def solution1(self, nums: List[int]) -> int:
        res = 0
        counterDict = {}
        for i in range(len(nums)):
            if nums[i] not in counterDict:
                counterDict[nums[i]] = 0
            else: 
                counterDict[nums[i]] += 1
                res += counterDict[nums[i]]
        return res

    def solution2(self, nums: List[int]) -> int:
        res = 0
        counterDict = {}
        for i in range(len(nums)):
            if nums[i] not in counterDict:
                counterDict[nums[i]] = 0
            else: 
                counterDict[nums[i]] += 1
                res += counterDict[nums[i]]
        return res
    
    def solution3(self, nums: List[int]) -> int:
        return sum(n * (n - 1) // 2 for n in Counter(nums).values())



    
