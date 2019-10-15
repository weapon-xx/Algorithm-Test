/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中没有重复出现的数字。
 * 示例 1:
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 */

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function deleteDuplicates(head) {
    const newHead = new ListNode('xx');
    newHead.next = head;
    let prev;
    let curr = newHead;

    while (curr) {
        prev = curr;
        curr = curr.next;

        while (curr && curr.next && curr.val === curr.next.val) {
            const { val } = curr;
            while (curr && curr.val === val) {
                curr = curr.next;
            }
            prev.next = curr;
        }
    }

    return newHead.next;
}

console.log(deleteDuplicates());
