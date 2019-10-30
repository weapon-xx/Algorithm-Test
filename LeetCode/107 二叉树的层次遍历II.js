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
    const res = [];
    function search(all, node, level) {
        if (!node) return;
        if (!res[level]) res[level] = [];

        res[level].push(node.val);
        search(all, node.left, level + 1);
        search(all, node.right, level + 1);
    }

    search(res, root, 0);
    return res.reverse();
}

console.log(levelOrderBottom());
