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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const listA = [];
  while(headA) {
    listA.push(headA);
    headA = headA.next;
  }

  const listB = [];
  while(headB) {
    listB.push(headB);
    headB = headB.next;
  }

  let lastIntersection = null;
  while((listA.length > 0 && listB.length > 0) && (listA.at(-1) === listB.at(-1))) {
    lastIntersection = listA.at(-1);
    listA.pop();
    listB.pop();
  }
  return lastIntersection;
};
