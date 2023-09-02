# https://leetcode.com/problems/palindrome-number/description/
# 0009-palindrome-number

class Solution:
    # def isPalindrome(self, x: int) -> bool:
    #     if x < 0: return False
    #     start = x
    #     rev = 0

    #     # start rev
    #     # 523   0
    #     # 52    3
    #     # 5     32
    #     # 0     325

    #     # 1337 8
    #     while start > 0:
    #         d = start % 10
    #         rev = rev * 10 + d
    #         start //= 10
            
    #     return rev == x
        
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        low = 0
        high = self.numberOfDigits(x) - 1

        while low < high:
            if self.getDigit(x, low) != self.getDigit(x, high): 
                return False
            low += 1
            high -= 1

        return True
    
    def numberOfDigits(self, x: int) -> int:
        # 10 ** -3 = .001       log10(.001) = -3
        # 10 ** -2 = .01        log10(.01) = -2
        # 10 ** -1 = .1         log10(.1) = -1
        # 10 ** 0  = 1          log10(1) = 0
        # 10 ** 1  = 10         log10(10) = 1
        # 10 ** 2  = 100        log10(100) = 2
        # 10 ** 3  = 1000       log10(1000) = 3
        # 10 ** 4  = 10000      log10(10000) = 4
        return int(log10(x)) + 1 if x != 0 else 1

    def getDigit(self, x:int, i: int) -> int:
        # (523 // 1) % 10 = 3
        # (523 // 10) % 10 = 2 
        # (523 // 100) % 10 = 5
        # (523 // 1000) % 10 = 0
        return (x // 10 ** i) % 10
