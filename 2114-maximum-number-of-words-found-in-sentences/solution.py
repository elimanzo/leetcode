# https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        # # 1st Solution
        # maxWords = 0
        # for x in sentences:
        #   x = x.split()
        #   maxWords = max(maxWords, len(x))
        # return maxWords

        # 2nd Solution
        # maxWords = 0
        # for x in sentences:
        #     maxWords = max(maxWords, x.count(' ') + 1)
        # return maxWords

        # 3rd Solution
        return max(sentence.count(' ') + 1 for sentence in sentences)