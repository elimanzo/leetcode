# https://leetcode.com/problems/account-balance-after-rounded-purchase/description/

import math

class Solution:
    def accountBalanceAfterPurchase(self, purchaseAmount: int) -> int:
        return self.baselineGoal2(purchaseAmount)
    
    def baselineGoal1(self, purchaseAmount: int) -> int:
        if (purchaseAmount % 10 < 5):
            return 100 - floor(purchaseAmount / 10) * 10
        return 100 - ceil(purchaseAmount / 10) * 10
    
    def baselineGoal2(self, purchaseAmount: int) -> int:
        remainder = purchaseAmount % 10
        if (remainder < 5):
            purchaseAmount = purchaseAmount - remainder 
        else:    
            purchaseAmount = purchaseAmount + (10 - remainder)
        return 100 - purchaseAmount

    def stretchGoal(self, purchaseAmount: int) -> int:
        return (100 - purchaseAmount + 5) // 10 * 10