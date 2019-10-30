/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 输出：
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
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
function levelOrder(root) {
    const res = [];
    function bfs(all, node, level) {
        if (!node) return;
        if (!all[level]) all[level] = [];

        all[level].push(node.val);
        bfs(all, node.left, level + 1);
        bfs(all, node.right, level + 1);
    }

    bfs(res, root, 0);
    return res;
}

console.log(levelOrder());
