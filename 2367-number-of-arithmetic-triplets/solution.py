# https://leetcode.com/problems/number-of-arithmetic-triplets/description/
# 2367-number-of-arithmetic-triplets

class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        return self.solution2(nums, diff, 3)

    def solution(self, nums: List[int], diff: int) -> int:
        res = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                for k in range(j + 1, len(nums)):
                    if nums[j] - nums[i] == diff and nums[k] - nums[j] == diff:
                        res += 1
        return res

    def solution1(self, nums: List[int], diff: int) -> int:
        res = 0
        prevSet = set()
        for num in nums:
            prevSet.add(num)
            if num - diff in prevSet and num - 2 * diff in prevSet:
                res += 1
        return res

    def solution2(self, nums: List[int], diff: int, n: int) -> int:
        res = 0
        sequence = {}
        for num in nums:
            seqLen = 0
            if num - diff not in sequence:
                seqLen += 1
            else: 
                seqLen += sequence[num - diff] + 1  
            if seqLen >= n:
                res += 1
            sequence[num] = seqLen
        return res
