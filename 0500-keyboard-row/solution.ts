// https://leetcode.com/problems/keyboard-row/description/
// 0500-keyboard-row

function findWords(words: string[]): string[] {
  const rows = [new Set('zxcvbnm'), new Set('asdfghjkl'), new Set('qwertyuiop')]
  return words.filter(word => isInRow(word, rows));
  
};

function isInRow(word: string, rows: Set<string>[]) {
  const lowerCaseWord = [...word.toLowerCase()]
  for(const row of rows) {
    if(lowerCaseWord.every(letter => row.has(letter))) {
      return true;
    }
  }
  return false;
}

// function findWords(words: readonly string[]): string[] {
//   return words.filter(
//     word => /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(word),
//   );
// }
