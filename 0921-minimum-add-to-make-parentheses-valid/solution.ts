function minAddToMakeValid(s: string): number {
  let stackLength = 0;
  let openParen = 0;
  for (const c of s) {
    if (c === "(") {
      ++stackLength;
      ++openParen;
      continue;
    }
    if (openParen > 0) {
      --stackLength;
      --openParen;
      continue;
    }
    ++stackLength;
  }
  return stackLength
};
