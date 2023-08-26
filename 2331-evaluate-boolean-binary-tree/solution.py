# https://leetcode.com/problems/evaluate-boolean-binary-tree/description/
# 2331-evaluate-boolean-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        return self.solution1(root)

    def solution(self, root: Optional[TreeNode]) -> bool:
        if root is None or 0 <= root.val < 2:
            return root.val is not None and root.val == 1

        leftRes = self.evaluateTree(root.left)
        rightRes = self.evaluateTree(root.right)

        return (leftRes and rightRes) if root.val == 3 else (leftRes or rightRes)
    
    def solution1(self, root: Optional[TreeNode]) -> bool:
        if root is None or 0 <= root.val < 2:
            return root.val is not None and root.val == 1

        leftRes = self.evaluateTree(root.left)
        if (root.val == 2 and leftRes) or (root.val == 3 and not leftRes):
            return leftRes
        
        return self.evaluateTree(root.right)
