/**
 * 难度：Medium
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径
 * 使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * 示例:
 * 输入:
 * [
 *   [1,3,1],
 *   [1,5,1],
 *   [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
    // 动态规划
    if (grid.length === 0) return 0;
    const dp = [[grid[0][0]]];

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (!dp[i]) dp[i] = [];
            if (dp[i][j] !== undefined) continue;
            const left = dp[i][j - 1] !== undefined ? (dp[i][j - 1] + grid[i][j]) : Number.MAX_VALUE;
            const up = dp[i - 1] !== undefined ? (dp[i - 1][j] + grid[i][j]) : Number.MAX_VALUE;
            dp[i][j] = Math.min(left, up);
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(minPathSum([[0]]));
console.log(minPathSum([[0, 0], [0, 0]]));
