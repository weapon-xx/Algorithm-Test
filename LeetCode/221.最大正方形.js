/**
 * 难度：Medium
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 示例:
 * 输入:
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 输出: 4
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    // 思路：动态规划
    if (matrix.length === 0) return 0;

    // 1.拷贝与原数组相同的矩阵，每一项为 0
    let dp = matrix.slice();
    dp = dp.map(row => row.map(() => 0));

    // 2.遍历原数组，并且新增 max 遍历保存最大边长
    let max = 0;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length; j += 1) {
            // 3.假如当前项不为 0，则从上、坐、左上三项选出最小
            if (+matrix[i][j]) {
                const left = dp[i][j - 1] || 0;
                const up = dp[i - 1] ? dp[i - 1][j] : 0;
                const leftUp = dp[i - 1] && dp[i - 1][j - 1] ? dp[i - 1][j - 1] : 0;
                dp[i][j] = Math.min(left, leftUp, up) + 1;
            } else {
                dp[i][j] = 0;
            }
            // 4.更新 max
            max = Math.max(max, dp[i][j]);
        }
    }
    // 5.返回最大正方形
    return max * max;
}

console.log(maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));
