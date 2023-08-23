# https://leetcode.com/problems/two-sum/solutions/737092/sum-megapost-python3-solution-with-a-detailed-explanation/
# 0001-two-sum

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        return self.solution2(nums, target)

    def solution(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]

    def solution2(self, nums: List[int], target: int) -> List[int]:
        indexDict = {}
        
        for i in range(len(nums)):
            otherIndexForSum = indexDict.get(target - nums[i])
            if otherIndexForSum is not None:
                return [i, otherIndexForSum]
            indexDict[nums[i]] = i
