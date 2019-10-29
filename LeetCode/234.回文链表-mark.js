/**
 * 请判断一个链表是否为回文链表。
 * 示例 1:
 * 输入: 1->2
 * 输出: false
 * 示例 2:
 * 输入: 1->2->2->1
 * 输出: true
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
 * @return {boolean}
 */
function isPalindrome(head) {
    if (!head || !head.next) return head;

    // 1.快慢指针找出链表重点
    let slow = head.next;
    let fast = head.next.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // 2.找出中点后，翻转链表的前半部分
    let prev;
    while (head !== slow) {
        const { next } = head;
        head.next = prev;
        prev = head;
        head = next;
    }

    // 3.快指针非空时，说明链表总个数为奇数，slow 向后移一位
    if (fast) {
        slow = slow.next;
    }

    // 4.遍历前半部分链表，并进行对比
    while (prev) {
        if (prev.val !== slow.val) {
            return false;
        }
        prev = prev.next;
        slow = slow.next;
    }
    return true;
}

console.log(isPalindrome());
