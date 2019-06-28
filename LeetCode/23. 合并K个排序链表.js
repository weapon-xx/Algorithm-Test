/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 输入:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    function mergeTwoList(l1 = null, l2 = null) {
        if (l1 === null || (Array.isArray(l1) && l1.length === 0)) {
            return l2;
        }

        if (l2 === null || (Array.isArray(l2) && l2.length === 0)) {
            return l1;
        }

        if (l1.val < l2.val) {
            l1.next = mergeTwoList(l1.next, l2);
            return l1;
        }
        l2.next = mergeTwoList(l1, l2.next);
        return l2;
    }

    const arr = [];
    // 采用分治思想，初步尝试两两合并
    for (let i = 0; i < lists.length;) {
        if (lists[i] && lists[i + 1]) {
            arr.push(mergeTwoList(lists[i], lists[i + 1]));
            i += 2;
        } else {
            arr.push(lists[i]);
            i += 1;
        }
    }

    // 最后再进行两两合并，直到剩余个数为二
    while (arr.length > 2) {
        const left = arr.shift();
        const right = arr.shift();
        arr.push(mergeTwoList(left, right));
    }

    return mergeTwoList(arr[0], arr[1]);
}

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]));
