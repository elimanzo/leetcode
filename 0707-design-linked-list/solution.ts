// https://leetcode.com/problems/design-linked-list/description/
// 0707-design-linked-list

class Node {
  val: number;
  next: Node | null;
  prev: Node | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = new Node(0);
    this.tail = new Node(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length = 0;
  }

  get(index: number): number {
    if(index < 0 || index > this.length - 1) {
      return -1;
    }

    let cur = this.head.next;
    while(index > 0) {
      cur = cur.next;
      index--;
    }
    return cur.val;
  }

  addAtHead(val: number): void {
    let [prev, node, next] = [this.head, new Node(val), this.head.next];
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
    this.length++;
  }

  addAtTail(val: number): void {
    let [prev, node, next] = [this.tail.prev, new Node(val), this.tail];
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if(index < 0 || index > this.length) {
      return;
    }

    let cur = this.head.next;
    while(index > 0) {
      cur = cur.next;
      index--;
    }

    let [prev, node, next] = [cur.prev, new Node(val), cur];
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
    this.length++;

  }

  deleteAtIndex(index: number): void {
    if(index < 0 || index > this.length - 1) {
      return;
    }

    let cur = this.head.next;
    while(index > 0) {
      cur = cur.next;
      index--;
    }

    let [prev, next] = [cur.prev, cur.next];
    prev.next = next;
    next.prev = prev;
    this.length--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
