# https://leetcode.com/problems/sum-multiples/
# 2652-sum-multiples

class Solution:
    def sumOfMultiples(self, n: int) -> int:
        return self.solution2(n)

    def solution(self, n: int) -> int:
        res = 0
        for i in range(1, n + 1):
            if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
                res += i
        return res

    def solution1(self, n: int) -> int:
        return sum(i for i in range(1, n + 1) if i % 3 == 0 or i % 5 == 0 or i % 7 == 0)
    
    def solution2(self, n: int) -> int:
        res = self.arithmiticSum(n, 3) + self.arithmiticSum(n, 5) + self.arithmiticSum(n, 7) - self.arithmiticSum(n, 3 * 5) - self.arithmiticSum(n, 3 * 7) - self.arithmiticSum(n, 5 * 7) + self.arithmiticSum(n, 3 * 5 * 7)

        return res
    
    def arithmiticSum(self, n: int, k: int) -> int:
        count = n // k

        min_ = k
        max_ = k * count

        return (min_ + max_) * count // 2
