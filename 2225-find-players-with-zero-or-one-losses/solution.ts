// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
// 2225-find-players-with-zero-or-one-losses

type WinsLost = {
  wins: number;
  losses: number;
}

function findWinners(matches: number[][]): number[][] {
  const playerStats: Record<number, WinsLost> = {};
  for(const [winner, loser] of matches) {
    playerStats[winner] ??= {wins: 0, losses: 0}
    playerStats[loser] ??= {wins: 0, losses: 0}
    playerStats[winner] = {
      wins: playerStats[winner].wins + 1, 
      losses: playerStats[winner].losses
    }
    playerStats[loser] = {
      wins: playerStats[loser].wins, 
      losses: playerStats[loser].losses + 1
    }
  }
  const res:[number[], number[]] = [[],[]];
  for(const key of Object.keys(playerStats)) {
    if(playerStats[key].losses === 0) {
      res[0].push(+key);
      continue;
    }
    if(playerStats[key].losses === 1) {
      res[1].push(+key);
      continue;
    }
  }
  return res;
};
