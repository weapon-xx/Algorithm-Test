/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 示例 1:
 * 输入: 1->1->2
 * 输出: 1->2
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
function deleteDuplicates(head) {
    const map = {};
    let prev;
    const newHead = head;
    while (head) {
        if (map[head.val]) {
            if (prev) {
                prev.next = head.next;
            }
        } else {
            map[head.val] = true;
            prev = head;
        }
        head = head.next;
    }

    return newHead;
}

console.log(deleteDuplicates());
