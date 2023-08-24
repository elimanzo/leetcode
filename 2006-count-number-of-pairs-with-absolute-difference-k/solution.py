# https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
# 2006-count-number-of-pairs-with-absolute-difference-k

class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        return self.solution1(nums, k)

    def solution(self, nums: List[int], k: int) -> int:
        res = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if abs(nums[i] - nums[j]) == k:
                    res += 1
        return res

    def solution1(self, nums: List[int], k: int) -> int:
        freq = {}
        res = 0
        for i in range(len(nums)):
            res += freq.get(nums[i] + k, 0)
            res += freq.get(nums[i] - k, 0)

            freq[nums[i]] = freq.get(nums[i], 0) + 1
        return res
