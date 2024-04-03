// https://leetcode.com/problems/word-search/
// 0079-word-search

const DIR = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function exist(board: string[][], word: string): boolean {
  const r = board.length;
  const c = board[0].length;

  const dfs = (i: number, j: number, index: number) => {
    if (i < 0 || i >= r || j < 0 || j >= c) {
      return;
    }
    if(board[i][j] !== word[index]) {
      return;
    }
    if(index === word.length - 1) {
      res = true;
      return;
    }
    const temp = board[i][j];
    board[i][j] = '#';
    for(const [di, dj] of DIR) {
      dfs(di + i, dj + j, index + 1);
    }
    board[i][j] = temp;
  }
  let res = false;
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      dfs(i, j, 0);
    }
  }
  return res;
};
