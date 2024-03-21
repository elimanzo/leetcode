// https://leetcode.com/problems/merge-in-between-linked-lists/
// 1669-merge-in-between-linked-lists
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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
  const nodeA = getNthNode(list1, a);
  const nodeB = getNthNode(list1, b + 1);
  const dummy = new ListNode();
  let cur = dummy;
  while(list1) {
    if(list1 === nodeA) {
      while(list2) {
        cur.next = list2;
        cur = cur.next;
        list2 = list2.next;
      }
      cur.next = nodeB;
      break;
    }
    cur.next = list1;
    cur = cur.next;
    list1 = list1.next;
  }
  return dummy.next;
};


function getNthNode(head: ListNode | null, n: number): ListNode | null {
  return !head || n === 0 ? head : getNthNode(head.next, n - 1);
}
