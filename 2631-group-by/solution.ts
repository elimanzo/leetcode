interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function (fn) {
  return this.reduce((res, element) => {
    (res[fn(element)] ??= []).push(element);
    return res;
  }, {});
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
