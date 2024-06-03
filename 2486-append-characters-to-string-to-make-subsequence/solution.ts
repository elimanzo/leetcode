function appendCharacters(s: string, t: string): number {
  let sCur = 0;
  let tCur = 0;
  let res = t.length;
  while(sCur < s.length && tCur < t.length) {
    if(s[sCur] === t[tCur]) {
      res--;
      sCur++;
      tCur++;
      continue;
    }
    sCur++;
  }
  return res;
};
