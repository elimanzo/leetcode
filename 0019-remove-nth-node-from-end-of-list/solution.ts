// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// 0019-remove-nth-node-from-end-of-list

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const len = getLength(head);

  const indexFromFront = len - n;

  if(indexFromFront === 0) {
    return head.next;
  }
  
  const nodeBeforeTheOneToDelete = getNode(head, indexFromFront - 1);
  nodeBeforeTheOneToDelete.next = nodeBeforeTheOneToDelete.next.next;

  return head;

};

function getLength(head: ListNode | null): number {
  return head === null ? 0 : 1 + getLength(head.next);
}

function getNode(head: ListNode | null, index: number): ListNode | null {
  return index === 0 ? head : getNode(head.next, index - 1);
}
