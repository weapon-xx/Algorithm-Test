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
    const newTree = new TreeNode();
    newTree.val = root.val;
    function reverse(oldNode, newNode) {
        if (oldNode.right) {
            newNode.left = new TreeNode();
            newNode.left.val = oldNode.right.val;
            if (oldNode.right.left || oldNode.right.right) {
                reverse(oldNode.right, newNode.left);
            }
        }
        if (oldNode.left) {
            newNode.right = new TreeNode();
            newNode.right.val = oldNode.left.val;
            if (oldNode.left.left || oldNode.left.right) {
                reverse(oldNode.left, newNode.right);
            }
        }
        return newNode;
    }
    return reverse(root, newTree);
}

invertTree();
