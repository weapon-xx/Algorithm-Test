/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。
 * （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
    if (!root) {
        return [];
    }
    function search(node, obj, level) {
        if (!node) return;

        if (!obj[level]) obj[level] = [];

        obj[level].push(node.val);
        search(node.left, obj, level + 1);
        search(node.right, obj, level + 1);
    }

    const map = search(root, {}, 0);
    return Object.keys(map).map(key => map[key]).reverse();
}

console.log(levelOrderBottom());
