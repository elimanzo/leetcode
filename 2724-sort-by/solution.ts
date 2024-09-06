type Fn = <T>(value: T) => number

function memoize<T>(fn: Fn): Fn {
  const cache = {};
  return function <T>(value: T) {
    const key = JSON.stringify(value);
    return cache[key] ?? (cache[key] = fn(value));
  }
}

function sortBy<T>(arr: T[], fn: Fn): T[] {
  const memoizedFn = memoize(fn)
  return arr.sort((a, b) => memoizedFn(a) - memoizedFn(b));
};
