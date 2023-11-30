// https://leetcode.com/problems/linked-list-cycle-ii/
// 0142-linked-list-cycle-ii

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

function detectCycle(head: ListNode | null): ListNode | null {
  const whereTheyMet = getMeetingSpot(head);
  if(!whereTheyMet) {
    return null;
  }
  let slow = head;
  let fast = whereTheyMet;
  while(slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

function getMeetingSpot(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      return fast;
    }
  }
  return null; 
};

