// https://leetcode.com/problems/design-browser-history/
// 1472-design-browser-history

class Node {
  url: string;
  next: Node | null;
  prev: Node | null;
  constructor(url: string, prev: Node | null = null, next: Node | null = null) {
    this.url = url;
    this.next = next;
    this.prev = prev;
  }
}

class BrowserHistory {
    cur: Node | null;
    constructor(homepage: string) {
      this.cur = new Node(homepage);
    }

    visit(url: string): void {
      this.cur.next = new Node(url, this.cur);
      this.cur = this.cur.next;
    }

    back(steps: number): string {
      while(this.cur.prev && steps > 0) {
        this.cur = this.cur.prev;
        steps--;
      }
      return this.cur.url;
    }

    forward(steps: number): string {
      while(this.cur.next && steps > 0) {
        this.cur = this.cur.next;
        steps--;
      }
      return this.cur.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
