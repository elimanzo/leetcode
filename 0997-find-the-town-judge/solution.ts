// https://leetcode.com/problems/find-the-town-judge/
// 0997-find-the-town-judge

function findJudge(n: number, trust: number[][]): number {
  const trusted = Array(n + 1).fill(0);
  for(const [i, j] of trust) {
    trusted[i]--;
    trusted[j]++;
  }

  for(let i = 1; i < trusted.length; i++) {
    if(n - 1 === trusted[i]) {
      return i;
    }
  }
  return -1;
};
