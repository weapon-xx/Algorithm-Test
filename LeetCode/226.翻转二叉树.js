/**
 * 翻转一棵二叉树。
 * 输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 输出：
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 递归解法
 */
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
function invertTree(root) {
    if (!root) return root;
    const newTree = new TreeNode(root.val);

    function swap(oldNode, newNode) {
        if (oldNode.left) {
            newNode.right = new TreeNode(oldNode.left.val);
            if (oldNode.left.left || oldNode.left.right) {
                swap(oldNode.left, newNode.right);
            }
        }
        if (oldNode.right) {
            newNode.left = new TreeNode(oldNode.right.val);
            if (oldNode.right.left || oldNode.right.right) {
                swap(oldNode.right, newNode.left);
            }
        }
    }

    swap(root, newTree);
    return newTree;
}

invertTree();
