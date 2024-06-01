function partition(s: string): string[][] {
  const res = [];

  const isPalindrome = (str: string): boolean => {
    let lo = 0;
    let hi = str.length - 1;
    while (lo < hi) {
      if (str[lo] !== str[hi]) {
        return false;
      }
      lo++;
      hi--;
    }
    return true;
  }

  const dfs = (i: number, path: string[]): void => {
    if (i === s.length) {
      res.push([...path]);
      return;
    }

    for (let end = i + 1; end <= s.length; end++) {
      const currentSub = s.substring(i, end);
      if (isPalindrome(currentSub)) {
        path.push(currentSub);
        dfs(end, path);
        path.pop();
      }
    }
  }
  dfs(0, []);
  return res;
};
