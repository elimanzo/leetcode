// https://leetcode.com/problems/reorder-list/description/
// 0143-reorder-list

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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let cur = slow.next;
  slow.next = null;
  let prev = null;
  while(cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  let head1 = head;
  let head2 = prev;

  while(head1 && head2) {
    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head1 = next1;

    head2.next = head1;
    head2 = next2;
  }
};
