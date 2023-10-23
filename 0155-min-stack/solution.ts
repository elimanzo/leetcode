// https://leetcode.com/problems/min-stack/
// 0155-min-stack

class MinStack {
    stack: [number, number][];
    constructor() {
      this.stack = [];
    }

    push(val: number): void {
      this.stack.push([val, this.stack.length === 0 ? val : Math.min(this.stack.at(-1)[1], val)]);
    }

    pop(): void {
      this.stack.pop();
    }

    top(): number {
      return this.stack.at(-1)[0];
    }

    getMin(): number {
      return this.stack.at(-1)[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
