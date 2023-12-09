// https://leetcode.com/problems/merge-k-sorted-lists/description/
// 0023-merge-k-sorted-lists

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if(!lists || lists.length === 0) {
    return null;
  }
  const pq = new MinPriorityQueue({priority: (node: ListNode) => node.val});
  for(const list of lists) { 
    if (list) {
      pq.enqueue(list); 
    }    
  }

  const dummy = new ListNode();
  let tail = dummy;
  let cur = null;
  while(!pq.isEmpty()) {
    cur = pq.dequeue().element;
    tail.next = cur;
    tail = tail.next;
    if (tail.next) {
      pq.enqueue(tail.next);
    }
  }
  return dummy.next;
};
