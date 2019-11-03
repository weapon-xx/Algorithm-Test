/**
 * 给定一个非空二叉树，返回其最大路径和。
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 * 示例 1:
 * 输入: [1,2,3]
 *       1
 *      / \
 *     2   3
 * 输出: 6
 *
 * 示例 2:
 * 输入: [-10,9,20,null,null,15,7]
 *    -10
 *    / \
 *   9  20
 *   /   \
 *  15   7
 * 输出: 42
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
function maxPathSum(root) {
    // 设置 max 变量用于保存最大值
    let max = Number.NEGATIVE_INFINITY;

    function maxGain(node) {
        if (!node) return 0;

        // 计算左右子路径，假如小于 0 时则被舍弃为 0
        const left = Math.max(maxGain(node.left), 0);
        const right = Math.max(maxGain(node.right), 0);
        // 计算当前节点下路径之和
        const sum = node.val + left + right;
        // 更新外部最大值
        max = Math.max(max, sum);
        // 返回左/右其中一条最大路径
        return node.val + Math.max(left, right);
    }

    maxGain(root);
    // 返回最大值
    return max;
}

console.log(maxPathSum());
