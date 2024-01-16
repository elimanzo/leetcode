// https://leetcode.com/problems/insert-delete-getrandom-o1/description/
// 0380-insert-delete-getrandom-o1

class RandomizedSet {
  map = new Map<number, number>();
  arr = [];

  insert(val: number): boolean {
    if(this.map.has(val)) {
      return false
    }
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if(!this.map.has(val)) {
      return false
    }
    const indexToSwap = this.map.get(val);
    this.swap(this.arr, indexToSwap, this.arr.length - 1);
    this.arr.pop();
    this.map.set(this.arr[indexToSwap], indexToSwap);
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }

  swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return;
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
