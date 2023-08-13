# https://leetcode.com/problems/separate-the-digits-in-an-array/

class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        return self.solution4(nums)

    def solution0(self, nums: List[int]) -> List[int]:
        res = []
        for num in nums:
            for c in str(num):
                res.append(int(c))
        return res

    def solution1(self, nums: List[int]) -> List[int]:
        return [int(c) for num in nums for c in str(num)]

    def solution2(self, nums: List[int]) -> List[int]:
        res = []
        for num in nums:
            digits = []
            while num > 0:
                digits.append(num % 10)
                num //= 10
            res.extend(digits[::-1])
        return res
    
    def solution3(self, nums: List[int]) -> List[int]:
        res = []
        for num in nums:
            res.extend(list(map(int, str(num))))
        return res
        
    def solution4(self, nums: List[int]) -> List[int]:
        for num in nums:
            yield from map(int, str(num))
