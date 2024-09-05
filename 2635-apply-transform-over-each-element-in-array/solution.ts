// 2635-apply-transform-over-each-element-in-array

function map(arr: readonly number[], fn: (n: number, i: number) => number): number[] {
  return arr.reduce((accumulator, value, index) => {
    accumulator.push(fn(value, index));
    return accumulator;
  }, []);
};
