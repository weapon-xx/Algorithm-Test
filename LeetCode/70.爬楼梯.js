/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 解答： 有题目可知，该算法属于斐波那契数列的具体场景，可使用动态规划优化时间复杂度
 */
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    const arr = [1, 1];
    for (let i = 2; i < n + 1; i += 1) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

console.log(climbStairs(5)); // 8
