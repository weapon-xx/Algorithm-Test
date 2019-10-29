/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 *
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 题目类似于爬楼梯，使用动态规划解法来优化时间复杂度
 * 也可以使用回溯法，但是超过了 leetCode 时间限制
 */
function uniquePaths(m, n) {
    // 思路：动态规划，根据题纲转化状态方程
    // 1.格子可以想象为一个二维数组
    const map = [];
    // 2.机器人只能向右、向下移动一步，对于 x、 y 轴边界情况，都是为一
    for (let i = 0; i < n; i += 1) {
        map.push([1]);
    }
    for (let i = 1; i < m; i += 1) {
        map[0].push(1);
    }
    // 3.假设坐标为 x、y，map[x, y] = map[x - 1][y] + map[x][y - 1]
    for (let x = 1; x < n; x += 1) {
        for (let y = 1; y < m; y += 1) {
            map[x][y] = map[x - 1][y] + map[x][y - 1];
        }
    }
    return map[n - 1][m - 1];
}

console.log(uniquePaths(3, 2));
