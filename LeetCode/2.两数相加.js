/**
 * 给出两个「非空」的链表用来表示两个非负的整数。其中，它们各自的位数是按照「逆序」的方式存储的
 * 并且它们的每个节点只能存储「一位」数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let flag = 0;
    const newHead = new ListNode();
    let prev = newHead;
    while (l1 || l2) {
        const node = new ListNode();
        let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        num += flag;
        if (num >= 10) {
            node.val = num - 10;
            flag = 1;
        } else {
            node.val = num;
            flag = 0;
        }
        prev.next = node;
        prev = node;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (flag) {
        prev.next = new ListNode(1);
    }
    return newHead.next;
}

console.log(addTwoNumbers());
