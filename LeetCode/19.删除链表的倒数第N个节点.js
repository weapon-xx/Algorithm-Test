/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    let newHead = head;
    const arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }

    const index = arr.length - n - 1;
    if (index < 0) {
        newHead = arr.length === 1 ? null : arr[index + 2];
    } else {
        arr[index].next = arr[index + 2] || null;
    }

    return newHead;
}

console.log(removeNthFromEnd());
