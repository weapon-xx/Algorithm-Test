/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 示例 :
 * 给定这个链表：1->2->3->4->5
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 说明 :
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    const newHead = new ListNode();
    newHead.next = head;
    let prev = null;
    let curr = newHead;

    const temp = []; // 缓存数组，用于保存 1 - k 之间的节点
    while (curr) {
        prev = curr;
        curr = curr.next;
        // 新增一个内部指针变量，用于检查边界
        let innerPoint = curr;
        // 当缓存数组里节点数量是小于 k 时，并且 innerPoint 不为空
        while (temp.length < k && innerPoint) {
            // 将节点 push 到缓存数组中，innerPoint 指向下一个节点
            temp.push(innerPoint);
            innerPoint = innerPoint.next;
        }

        // 当缓存数组小于 k，说明剩余节点不足，则保持不变，直接退出循环即可
        if (temp.length < k) {
            break;
        } else {
            // 首先取出数组中末尾节点，并保存其 next 节点
            const lastNext = temp[temp.length - 1].next;
            while (temp.length) {
                // 节点出栈，进行翻转
                const node = temp.pop();
                prev.next = node;
                prev = node;
            }
            // curr 节点因为已经被翻转，需要将它的 next 指向 lastNext，否则会死循环
            curr.next = lastNext;
        }
    }

    return newHead.next;
}

console.log(reverseKGroup());
