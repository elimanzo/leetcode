// https://leetcode.com/problems/remove-letter-to-equalize-frequency/
// 2423-remove-letter-to-equalize-frequency

function equalFrequency(word: string): boolean {
  const freq: Record<string, number> = {};
  for(const c of word) { 
    freq[c] = (freq[c] ?? 0) + 1; 
  }
  const freq2: Record<number, number> = {};
  for(const c of Object.values(freq)) {
    freq2[c] = (freq2[c] ?? 0) + 1;
  }
  return isGood(freq2);
};

function isGood(freq: Record<string, number>): boolean {
  if(Object.keys(freq).length > 2) { 
    return false;
  }
  if(Object.keys(freq).length === 1) {
    const onlyKey = Number(Object.keys(freq)[0]);
    return onlyKey === 1 || freq[onlyKey] === 1;
  }
  if(freq[1] === 1) {
    return true;
  }
  const maxKey = Math.max(...Object.keys(freq).map(Number)); 
  if(maxKey === 1) { 
    return true;
  }
  if(freq[maxKey] > 1) {
    return false;
  }
  return freq[maxKey - 1] != null;
}

function equalFreq(freq: Record<string, number>): boolean {
  return new Set(Object.values(freq).filter(n => n > 0)).size === 1;
}

// 4: 2 3: 1 [4 4 3] false 
// 5: 1 6: 6 [ 5 , 6, 6 ...] false
// 8: 2 7: 1 [8 , 8, 7] false
// 10: 3 8:1 [10, 10, 10, 8] false
// 3: 1 2: 2 [3 2 2] true
// 5:1 4:4   [5 4 4 4 4] true
// 1:5 2:1   [1 1 1 1 1 2 ] true
// 5:1 1:2   [5 1 1] false
// 4:2 1:2   [4 4 1 1]

// Not weird difference greater > 1
// 5: 2 3: 2 [5 5 3 3] False
// Not weird difference of 1
// 6: 3 5: 2 [6 6 6 5 5] false

// 1 as a key difference greater > 1
// 1: 2 3: 2 false
// 1: 2 3: 1 false

// 1 as a key difference of 1
// 1: 2 2: 2 false
// 1: 2 2: 1 true


// double weird difference of 1
// 1: 1 2: 3 true
// 1: 1 2: 1 true

// difference > 1
// 1: 1 3: 3 true
// 1: 1 3: 1 true

// Is 1 Value of the smaller key? is 1 the value of the larger Key? Is difference of keys 1?

// 2:1 3:1 true
// 2:1 4:1 false
// 2:1 3:2 false
// 2:1 4:2 false
// 2:2 3:1 true
// 2:2 4:1 false



// 1: 1 2: 3 true
// 1: 1 3: 3 true
// 1: 1 3: 1 true


// 3: 1 2: 2 [3 2 2] true
// 5: 1 4: 4 [5 4 4 4 4] true
// 1: 5 2: 1 [1 1 1 1 1 2 ] true
// 1: 2 2: 1 true
// 1: 1 2: 1 true
// 2: 1 3: 1 true
// 2: 2 3: 1 true
