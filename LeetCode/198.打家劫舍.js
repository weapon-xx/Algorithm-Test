/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，
 * 能够偷窃到的最高金额。
 * 示例 1:
 * 输入: [1,2,3,1]
 * 输出: 4
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 根据题目分析得出状态方程，并使用动态规划求解
 *
 */
function rob(nums) {
    if (nums.length === 0) return 0;
    const dp = [];
    dp[0] = 0;
    [dp[1]] = [nums[0]];
    for (let i = 2; i <= nums.length; i += 1) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[nums.length];
}

console.log(rob([2, 7, 9, 3, 1]));
