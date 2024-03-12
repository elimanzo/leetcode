// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// 1171-remove-zero-sum-consecutive-nodes-from-linked-list

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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  if(!head) {
    return null;
  }

  const dummy = new ListNode(0, head);

  let cur = dummy;
  const prefixSumsToNodes = {};
  let runningSum = 0;
  while(cur) {
    runningSum += cur.val;
    prefixSumsToNodes[runningSum] = cur;
    cur = cur.next;
  }

  cur = dummy;
  runningSum = 0;
  while(cur) {
    runningSum += cur.val
    cur.next = prefixSumsToNodes[runningSum].next;
    cur = cur.next;
  }
  return dummy.next;
};
