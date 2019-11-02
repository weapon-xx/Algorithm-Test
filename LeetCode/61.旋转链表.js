/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 示例 1:
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    if (!head) return head;
    const temp = [];
    let curr = head;
    while (curr) {
        temp.push(curr);
        curr = curr.next;
    }

    // k ÷ (数组长度) 求出余数，就是需要旋转的次数，提高时间复杂度
    for (let i = 0; i < k % (temp.length); i += 1) {
        const lastNode = temp.pop();
        [lastNode.next] = temp;
        temp.unshift(lastNode);
        temp[temp.length - 1].next = null;
    }

    return temp[0];
}

console.log(rotateRight());
