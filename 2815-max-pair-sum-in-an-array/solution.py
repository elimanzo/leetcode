# https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3901949/python-3-6-lines-dict-t-m-102-ms-16-mb/
# 2815-max-pair-sum-in-an-array

class Solution:
    def maxSum(self, nums: List[int]) -> int:
        digitDict = {}
        maxDigitSum = -1

        for num in nums:
            maxDigit = self.getMaxDigit(num)
            if maxDigit not in digitDict:
                digitDict[maxDigit] = []
            digitDict[maxDigit].append(num)
            digitDict[maxDigit].sort()
            if len(digitDict[maxDigit]) > 2:
                digitDict[maxDigit].pop(0)

        for group in digitDict.values():
            maxDigitSum = max(maxDigitSum, self.maxGroup(group))
    
        return maxDigitSum

    def getMaxDigit(self, num: int) -> int:
        return int(max(str(num)))
    
    def maxGroup(self, group: List[int]) -> int:
        if len(group) < 2:
            return -1
        
        return group[-1] + group[-2]
