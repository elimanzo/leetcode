# https://leetcode.com/problems/find-the-difference/description/

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        return self.solution1(s, t)

    def solution0(self, s: str, t: str) -> str:
        s, t = sorted(s), sorted(t)
        for i in range(len(s)):
            if t[i] != s[i]:
                return t[i]
        return t[len(s)]
    
    def solution1(self, s: str, t: str) -> str:
        letters = [0] * 26
        # ascii lowercase alphabet a-z = 97-122

        for l in s:
            letters[ord(l.lower()) - ord('a')] += 1
        
        for l in t:
            letters[ord(l.lower()) - ord('a')] -= 1
        
        print(letters)
        
        for i, val in enumerate(letters):
            if val != 0:
                return chr(i + ord('a'))
            
        return chr('a')