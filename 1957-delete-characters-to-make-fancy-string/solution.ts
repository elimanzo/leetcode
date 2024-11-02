function makeFancyString(s: string): string {
  const res = [];
  for(const c of s) {
    if(res.length > 1 && res.at(-1) === c && res.at(-2) === c) {
      continue;
    }
    res.push(c);
  }
  return res.join("");
};
