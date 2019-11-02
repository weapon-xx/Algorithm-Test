/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
    if (!head) return head;
    const map = new Map();

    while (head) {
        if (!map.has(head)) {
            map.set(head, true);
        } else {
            break;
        }
        head = head.next;
    }

    return head || null;
}

console.log(detectCycle());
