/**
 * 在 O(nlogN) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 示例 1:
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 示例 2:
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 */
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
    // 思路：根据题目要求，时间复杂度为 O(nlogN)
    // 所以考虑分治思想，先找出链表中点切分成两两一组进行排序，再进行组合排序
    // 1.判断节点长度是否大于 2，否则 return
    if (!head || !head.next) {
        return head;
    }
    // 2.快慢指针找出中点
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 3.找出中点，切割出左右两组节点
    const middleNode = slow.next;
    slow.next = null;

    // 4.递归继续切分
    let left = sortList(head);
    let right = sortList(middleNode);
    // 5.新增节点用于保存结果
    const newHead = new ListNode();
    let ponit = newHead;

    // 6.对两组已排序链表进行遍历
    while (left && right) {
        if (left.val < right.val) {
            ponit.next = left;
            left = left.next;
        } else {
            ponit.next = right;
            right = right.next;
        }
        ponit = ponit.next;
    }

    // 7.收尾
    ponit.next = left || right;
    return newHead.next;
}

console.log(sortList());
