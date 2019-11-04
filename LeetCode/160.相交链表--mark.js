/**
 * 编写一个程序，找到两个单链表相交的起始节点。
 * 如下面的两个链表：
 * 示例 1
 * 输入：
 * 2 -> 6 -> 4
 *             \
 *              5 -> 9 -> 8
 *             /
 *      3 -> 2
 * 返回相交节点 5
 * 示例 2
 * 输入：
 * 2 -> 6 -> 4
 *      3 -> 2
 * 无相交节点返回 null
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    // 思路：
    // 假如两个链表相交，那么从相交节点开始到结束，必定是长度一样，
    // 那么只是前半部分长度可能会不一样。
    // 1.定义两个指针分别指向 headA 和 headB
    // 2.从 pA 、pB 开始遍历，假如 pA 遍历结束后，将它指向 pB（pB 同理）
    // 3.假如 pA === pB 时就跳出循环，这里会分为两种情况
    // 相交时 pA 和 pB 会指向相交节点
    // 假如不相交时，pA 和 pB 会指向 null
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = !pA ? headB : pA.next;
        pB = !pB ? headA : pB.next;
    }
    return pA;
}

console.log(getIntersectionNode());
