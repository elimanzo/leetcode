// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description/?envType=daily-question&envId=2023-11-20
// 2391-minimum-amount-of-time-to-collect-garbage

function garbageCollection(garbage: string[], travel: number[]): number {
  let res = garbage.map(g => g.length).reduce((a, b) => a + b);
  const timeForGarbage = (c: string): number => {
    let minutes = 0;
    let lastIndex = 0;
    for(let i = 0; i < garbage.length; i++) {
      if(garbage[i].includes(c)) {
        lastIndex = i;
      }
    }
    for(let i = 0; i < lastIndex; i++) {
      minutes += travel[i];
    }
    return minutes;
  }
  res += timeForGarbage('M') + timeForGarbage('P') + timeForGarbage('G'); 
  return res;
};
// Paper
// house[0] to house[1] = 2
// house[1]             = 1
// house[1] to house[2] = 4
// house[2]             = 1
//          8 min

// Garbage
// house [0]            = 1
// house[0] to house[2] = 6
// house[2]             = 1
// house[2] to house[3] = 3
// hosue[3]             = 2
//      total = 13 min

// total = 8 + 13 = 21
