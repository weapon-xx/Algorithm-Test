/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 实例1：
 * 给定二叉树 [3,9,20,null,null,15,7]，返回 true 。
 *
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
 * @return {boolean}
 */
function isBalanced(root) {
    if (!root) return true;
    function getMaxDepth(node, level) {
        if (!node) return level;

        const left = getMaxDepth(node.left, level + 1);
        const right = getMaxDepth(node.right, level + 1);
        if (left === -1 || right === -1) return -1;

        return Math.abs(left - right) < 2 ? Math.max(left, right) : -1;
    }
    const left = getMaxDepth(root.left, 1);
    const right = getMaxDepth(root.right, 1);
    return (left === -1 || right === -1) ? false : Math.abs(left - right) < 2;
}

console.log(isBalanced());
