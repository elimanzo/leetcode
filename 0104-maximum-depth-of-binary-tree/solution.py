# https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
# 0104-maximum-depth-of-binary-tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return self.solution2(root)
    
    def solution(self, root: Optional[TreeNode]) -> int:
        if root is None: 
            return 0

        leftRes = self.maxDepth(root.left) + 1 
        rightRes = self.maxDepth(root.right) + 1

        return max(leftRes, rightRes)
    
    def solution1(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        
        stack = [root]
        depth = 0
        
        while stack:
            for i in range(len(stack)):
                node = stack.pop(0)
                if node.left: stack.append(node.left)
                if node.right: stack.append(node.right)
            depth += 1
        return depth

    def solution2(self, root: Optional[TreeNode]) -> int:
        return max(self.maxDepth(root.left) + 1, self.maxDepth(root.right) + 1) if root is not None else 0
