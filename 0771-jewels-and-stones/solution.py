# https://leetcode.com/problems/jewels-and-stones/description/

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        # # Solution 1
        # count = 0
        # for stone in stones:
        #  for jewel in jewels:
        #    if jewel == stone:
        #      print(jewel + stone)
        #      count += 1
        # return count
        
        # # Solution 2
        # count = 0
        # setJewels = set(jewels)
        # for stone in stones:
        #     if stone in setJewels:
        #         count += 1
        # return count

        # Solution 3
        jewels = set(jewels)
        return sum(s in jewels for s in stones)