/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，
 * 最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽
 * 可能大（一个节点也可以是它自己的祖先）。”
 * 例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]
 * 示例 1:
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
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
    if (!root) return root;
    let res = null;
    const pVal = p.val;
    const qVal = q.val;

    function dfs(node) {
        if (!node) return node;

        const left = dfs(node.left) ? 1 : 0;
        const right = dfs(node.right) ? 1 : 0;
        const mid = (node.val === pVal || node.val === qVal) ? 1 : 0;

        if (mid + left + right >= 2) {
            res = node;
        }

        return mid + left + right > 0;
    }

    dfs(root);
    return res;
}

console.log(lowestCommonAncestor());
