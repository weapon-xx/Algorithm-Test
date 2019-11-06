/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 *百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q
 * 最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度
 * 尽可能大（一个节点也可以是它自己的祖先）。”
 * 例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5]
 *          6
 *         / \
 *       2    8
 *      / \  / \
 *     0  4  7  9
 *    / \ /\
 *   - - 3 5
 * 示例 1:
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    // 思路：
    // 根据二叉搜索树的特性，当目标值大于当前节点时，则目标在右节点
    // 小于时，则目标在左节点
    // 等于时，则说明找到目标节点
    const left = p.val;
    const right = q.val;

    while (root) {
        if (!root) return root;

        if (left > root.val && right > root.val) {
            root = root.right;
        } else if (left < root.val && right < root.val) {
            root = root.left;
        } else {
            return root;
        }
    }
    return null;
}

console.log(lowestCommonAncestor());
