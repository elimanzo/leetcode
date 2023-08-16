# https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

class Solution:
    def countDigits(self, num: int) -> int:
        return self.solution2(num)

    def solution0(self, num: int) -> int:       
        ans = 0
        n = num
        while num != 0:
            ans += 1 if n % (num % 10) == 0 else 0
            num //= 10
        return ans
    
    def solution1(self, num: int) -> int:
        return sum(num % int(c) == 0 for c in str(num))

    def solution2(self, num: int) -> int:
        ans = 0
        return sum(num % digit == 0 for digit in self.getDigits(num))

    def getDigits(self, num:int) -> int:
        while num != 0:
            yield num % 10
            num //= 10
