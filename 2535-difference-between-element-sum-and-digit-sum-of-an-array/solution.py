# https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/
# 2535-difference-between-element-sum-and-digit-sum-of-an-array

class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        return self.solution2(nums)

    def solution0(self, nums: List[int]) -> int:
        digitSum = 0
        for num in nums:
            for digit in self.getDigits(num):
                digitSum += digit
        return abs(sum(nums) - digitSum)
    
    def getDigits(self, num: List[int]) -> int:
        while (num > 0):
            yield num % 10
            num //= 10

    def solution1(self, nums: List[int]) -> int:
        digitSum = 0
        for num in nums:
            for digit in str(num):
                digitSum += int(digit)
        return abs(sum(nums) - digitSum)
    
    def solution2(self, nums: List[int]) -> int:
        return sum(nums) - sum(sum(int(c) for c in str(num)) for num in nums)
    
