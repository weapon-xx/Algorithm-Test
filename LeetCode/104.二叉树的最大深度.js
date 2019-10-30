/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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
 * @return {number}
 */
function maxDepth(root) {
    if (!root) return 0;
    function deep(node, level) {
        if (node) {
            level += 1;
        }
        const left = node.left ? deep(node.left, level) : level;
        const right = node.right ? deep(node.right, level) : level;
        return Math.max(left, right);
    }
    return deep(root, 0);
}

console.log(maxDepth());
