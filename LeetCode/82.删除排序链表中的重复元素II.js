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
    // 新建一个新节点，将它的 next 指向 head
    const newHead = new ListNode('xx');
    newHead.next = head;
    // 新建 prev 变量用于保存先前节点
    let prev;
    // 新建 curr 变量用于保存当前节点，并且初始化指向 newHead
    let curr = newHead;

    while (curr) {
        prev = curr;
        curr = curr.next;

        // 当前节点值等于 next 节点值时
        while (curr && curr.next && curr.val === curr.next.val) {
            // 将值保存到 val 变量中
            const { val } = curr;
            // 关键：假如当前节点的值等于 val 时，将当前节点指向 next
            // 用于去除重复节点，比如：1->1->1->2 => 2
            while (curr && curr.val === val) {
                curr = curr.next;
            }
            // 先前节点 next 指向当前节点
            prev.next = curr;
        }
    }

    return newHead.next;
}

console.log(deleteDuplicates());
