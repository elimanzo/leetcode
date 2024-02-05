// https://leetcode.com/problems/minimum-window-substring/
// 0076-minimum-window-substring

function minWindow(s: string, t: string): string {
  if (t === '') {
    return '';
  }

  const tFreq = {};
  for(const c of t) {
    tFreq[c] = (tFreq[c] ?? 0) + 1;
  }

  let have = 0;
  let need = Object.keys(tFreq).length;
  const window = {};
  let res = [-1, -1];
  let resLength = Infinity;
  let l = 0;
  for(let r = 0; r < s.length; r++) {
    const c1 = s[r];
    window[c1] = (window[c1] ?? 0) + 1;

    if(tFreq[c1] != null && window[c1] === tFreq[c1]) {
      have++;
    }

    while(have === need) {
      if(r - l + 1 < resLength) {
        res = [l, r];
        resLength = r - l + 1;
      }
      const c2 = s[l]
      window[c2]--;
      if(tFreq[c2] != null && window[c2] < tFreq[c2]) {
        have--;
      }
      l++;
    }
  }

  return resLength !== Infinity ? s.slice(res[0], res[1] + 1) : '';
};
