// https://leetcode.com/problems/reverse-nodes-in-k-group/
// 0025-reverse-nodes-in-k-group

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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while(true) {
    const kth = getKth(groupPrev, k);
    if(!kth) {
      break;
    }
    const groupNext = kth.next;

    let prev = kth.next;
    let cur = groupPrev.next;
    while(cur !== groupNext) {
      [cur.next, prev, cur] = [prev, cur, cur.next];
    }
    [groupPrev.next, groupPrev] = [kth, groupPrev.next];
  }

  return dummy.next;
};

function getKth(head: ListNode | null, k: number): ListNode | null {
  while(head && k > 0) {
    k--;
    head = head.next;
  }
  return head;
};
