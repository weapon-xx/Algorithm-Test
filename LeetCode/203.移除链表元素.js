/**
 * 删除链表中等于给定值 val 的所有节点。
 * 示例:
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    let newHead = head;
    let prev;
    while (head) {
        if (head.val === val) {
            if (prev) {
                prev.next = head.next;
            } else {
                newHead = head.next;
            }
        } else {
            prev = head;
        }
        head = head.next;
    }

    return newHead;
}

console.log(removeElements([2, 2, 6, 3, 4, 5, 6], 2));
