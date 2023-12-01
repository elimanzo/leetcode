// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent
// 1662-check-if-two-string-arrays-are-equivalent

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let [w1, w2, i, j] = [0, 0, 0, 0];
  while(w1 < word1.length && w2 < word2.length) {
    if(word1[w1][i] !== word2[w2][j]) {
      return false;
    }
    i++;
    if(i === word1[w1].length) {
      w1++;
      i = 0;
    }
    j++;
    if(j === word2[w2].length) {
      w2++;
      j = 0;
    }
  }
  return w1 !== word1.length || w2 !== word2.length ? false : true;
};


// function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
//   return word1.join('') === word2.join('');
// };
