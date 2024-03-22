// https://leetcode.com/problems/palindrome-linked-list/description/
// 0234-palindrome-linked-list

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

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = slow;
  slow = slow.next;
  prev.next = null;
  while(slow) {
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  fast = head;
  slow = prev;
  while(slow) {
    if(fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};
