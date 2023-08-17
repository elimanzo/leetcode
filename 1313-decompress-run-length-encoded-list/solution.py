# https://leetcode.com/problems/decompress-run-length-encoded-list/description/

class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        return self.solution2(nums)

    
    def solution0(self, nums: List[int]) -> List[int]:
        count = 0
        res = []
        for i in range(len(nums)):
            if i % 2 != 0:
                count = nums[i - 1]
                for j in range(count):
                    res.append(nums[i])
        return res

    def solution1(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(0, len(nums), 2):
            res.extend([nums[i + 1]] * nums[i])
        return res
    
    def solution2(self, nums: List[int]) -> List[int]:
        for i in range(0, len(nums), 2):
            for j in range(nums[i]):
                yield nums[i + 1]
