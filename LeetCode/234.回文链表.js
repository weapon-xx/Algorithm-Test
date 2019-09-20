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
    if (!head || !head.next) {
        return true;
    }

    // 1.快慢指针找出链表中点
    let fast = head.next.next;
    let slow = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let next;
    let prev;
    // 2.翻转链表前半部分
    while (head !== slow) {
        ({ next } = head);
        head.next = prev;
        prev = head;
        head = next;
    }

    // 3.假如链表总长度为奇数，则 slow 后移一个节点
    if (fast) {
        slow = slow.next;
    }

    // 4.回文判断比较
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
