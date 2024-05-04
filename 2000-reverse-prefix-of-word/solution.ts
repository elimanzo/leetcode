function reversePrefix(word: string, ch: string): string {
  const arr = [...word];
  const indexOfCh = arr.indexOf(ch);
  let lo = 0;
  let hi = indexOfCh;
  while(lo < hi) {
    [arr[lo++], arr[hi--]] = [arr[hi], arr[lo]];
  }
  return arr.join('');
};
