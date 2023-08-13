# https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        return self.solution2(candies, extraCandies)

    def solution0(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandy = max(candies)
        res = []
        for candy in candies:
            res.append(candy + extraCandies >= maxCandy)
        return res
    
    def solution1(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandy = max(candies) - extraCandies
        return [candy >= maxCandy for candy in candies]
    
    def solution2(self, candies: List[int], extraCandies: int) -> List[bool]:
        candyAmount = max(candies) - extraCandies
        return [candy >= candyAmount for candy in candies]