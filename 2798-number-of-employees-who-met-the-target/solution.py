# https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return self.solution2(hours, target)

    def solution1(self, hours: List[int], target: int) -> int:
        count = 0
        for x in hours:
            if x >= target:
                count += 1
        return count

    def solution2(self, hours: List[int], target: int) -> int:
        return sum(x >= target for x in hours)