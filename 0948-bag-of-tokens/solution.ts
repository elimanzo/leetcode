// https://leetcode.com/problems/bag-of-tokens/
// 0948-bag-of-tokens

function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);
  let lo = 0;
  let hi = tokens.length - 1;
  let score = 0;
  let res = 0;
  while(lo <= hi) {
    if(tokens[lo] <= power) {
      power -= tokens[lo];
      lo++;
      score++;
      res = Math.max(res, score);
      continue;
    }
    if(score >= 1) {
      power += tokens[hi];
      hi--;
      score--;
      continue;
    }
    break;
  }

  return res;
};

// power is what we get and score = 0
// tokens 
// face up: power >= tokens[i] 
    // we can play tokens[i].
    // power -= tokens[i]
    // score++
// face down: score >= 1
    // we can play tokens[i]
    // power += tokens[i]
    // score--

// return max score you can achieve after playing any number of tokens

// power = 200 - 100 = 100
// score = 1
// power = 100 + 400 = 500;
// score = 0;
// power = 500 - 200 = 300;
// score = 1
// power = 300 - 300 = 0;
// score = 2
