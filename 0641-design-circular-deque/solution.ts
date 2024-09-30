class MyNode<T>{
  public next: MyNode<T> | null;
  public prev: MyNode<T> | null;
  public value: T | null;
  constructor(value: T | null = null, next: MyNode<T> | null = null, prev: MyNode<T> | null = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class MyCircularDeque<T> {
  private maxSize: number;
  private currSize: number;
  private head: MyNode<T> | null;
  private tail: MyNode<T> | null;
  constructor(k: number) {
    this.maxSize = k;
    this.currSize = 0;
    this.head = new MyNode<T>();
    this.tail = this.head;
  }

  isFirstInsert(value: T) {
    if (this.currSize !== 0) {
      return false;
    }
    this.head.value = value;
    ++this.currSize;
    return true;
  }

  isDeletingOnlyNode() {
    if (this.currSize !== 1) {
      return false;
    }
    this.head.value = null;
    --this.currSize;
    return true;
  }

  insertFront(value: T): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.isFirstInsert(value)) {
      return true;
    }
    const temp = new MyNode(value, this.head)
    this.head.prev = temp;
    this.head = this.head.prev;
    ++this.currSize;
    return true;
  }

  insertLast(value: T): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.isFirstInsert(value)) {
      return true;
    }
    const temp = new MyNode(value, null, this.tail);
    this.tail.next = temp;
    this.tail = this.tail.next;
    ++this.currSize;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    if (this.isDeletingOnlyNode()) {
      return true;
    }
    this.head = this.head.next;
    this.head.prev = null;
    --this.currSize;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    if (this.isDeletingOnlyNode()) {
      return true;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    --this.currSize;
    return true;
  }

  getFront(): T | -1 {
    return this.isEmpty() ? -1 : this.head.value;
  }

  getRear(): T | -1 {
    return this.isEmpty() ? -1 : this.tail.value;
  }

  isEmpty(): boolean {
    return this.currSize === 0;
  }

  isFull(): boolean {
    return this.currSize === this.maxSize;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
