// https://leetcode.com/problems/merge-two-sorted-lists/
// 0021-merge-two-sorted-lists

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  return mergeKList([list1, list2]);  
};

function mergeKList(lists: Array<ListNode | null>): ListNode | null {
  const pq = new MinPriorityQueue({priority: node => node.val});
  for(const list of lists) {
    if(list != null) {
      pq.enqueue(list);
    }
  }
  
  const dummy = new ListNode();
  let tail = dummy;
  while(!pq.isEmpty()) {
    const node = pq.dequeue().element;
    tail.next = node;
    tail = node;
    if(node.next !== null) {
      pq.enqueue(node.next);
    }
  }
  return dummy.next;
}
