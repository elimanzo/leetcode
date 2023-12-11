// https://leetcode.com/problems/find-median-from-data-stream/
// 0295-find-median-from-data-stream

class MedianFinder {
    top = new MinPriorityQueue();
    bottom = new MaxPriorityQueue();

    addNum(num: number): void {
      if(this.bottom.size() === this.top.size()) {
        this.top.enqueue(num)
        this.bottom.enqueue(this.top.dequeue().element);
      } else {
        this.bottom.enqueue(num);
        this.top.enqueue(this.bottom.dequeue().element);
      }
    }

    findMedian(): number {
      if (this.bottom.size() === this.top.size()) {
        return (this.bottom.front().element + this.top.front().element) / 2;
      } 
      return this.bottom.front().element;
    }
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
