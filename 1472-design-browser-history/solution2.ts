// https://leetcode.com/problems/design-browser-history/
// 1472-design-browser-history

class BrowserHistory {
  history: string[];
  cur: number;
  constructor(homepage: string) {
    this.history = [homepage];
    this.cur = 0;
  }

  visit(url: string): void {
    this.history[++this.cur] = url;
    this.history.length = this.cur + 1;
  }

  back(steps: number): string {
    this.cur = Math.max(this.cur - steps, 0);
    return this.history[this.cur];
  }

  forward(steps: number): string {
    this.cur = Math.min(this.cur + steps, this.history.length - 1);
    return this.history[this.cur];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
