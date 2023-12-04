/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    for(let cur = head; cur; cur = cur.next.next) {
      cur.next = new Node(cur.val, cur.next);
    }
    for(let cur = head; cur; cur = cur.next.next) {
      cur.next.random = cur.random?.next ?? null;
    }
    let dummy = new Node();
    let tail = dummy;
    for(let cur = head; cur; cur = cur.next) {
      tail.next = cur.next;
      cur.next = cur.next.next;
      tail = tail.next;
    }
    return dummy.next;
};
