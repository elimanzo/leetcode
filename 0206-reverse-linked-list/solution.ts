// https://leetcode.com/problems/reverse-linked-list/
// 0206-reverse-linked-list

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

// function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null;
//   let cur = null;
//   while(head) {
//     cur = head;
//     head = head.next;
//     cur.next = prev;
//     prev = cur;
//   }
//   return prev;
// };

function reverseList(head: ListNode | null): ListNode | null {
  const reverse = (cur: ListNode | null, prev: ListNode | null = null) => {
    if(cur == null) {
      return prev;
    }
    let next = cur.next;
    cur.next = prev;
    return reverse(next, cur);
  }
  return reverse(head);
};
