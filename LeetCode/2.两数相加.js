// Definition for singly-linked list.
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
