class MinStack {
  private stack: number[] = [];
  private min = Infinity;

  push(val: number): void {
    if(this.stack.length === 0) {
      this.stack.push(0);
      this.min = val;
      return;
    }
    this.stack.push(val - this.min);
    this.min = Math.min(val, this.min);
  }

  pop(): void {
    const pop = this.stack.pop();
    this.min -= pop < 0 ? pop : 0;
  }

  top(): number {
    const top = this.stack.at(-1);
    return top > 0 ? top + this.min : this.min;
  }

  getMin(): number {
    return this.min;
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
