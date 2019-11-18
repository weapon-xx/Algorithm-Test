/**
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 示例 1:
 * 输入: word1 = "horse", word2 = "ros"
 * 输出: 3
 * 解释:
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
    // 思路：动态规划
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = [];

    // 第一行
    dp.push([0]);
    for (let j = 1; j <= len2; j += 1) {
        dp[0][j] = dp[0][j - 1] + 1;
    }

    // 第一列
    for (let i = 1; i <= len1; i += 1) {
        if (!dp[i]) dp[i] = [];
        dp[i][0] = dp[i - 1][0] + 1;
    }

    // dp 矩阵
    // [
    //     [0, 1, 2, 3]
    //     [1],
    //     [2]
    //     [3],
    //     [4],
    //     [5],
    // ]

    for (let i = 1; i <= len1; i += 1) {
        for (let j = 1; j <= len2; j += 1) {
            // 当 word1[i] === word2[j] 时，dp[i][j] = dp[i - 1][j - 1]
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 当 word1[i] != word2[j]，dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
                // 其中，dp[i-1][j-1] 表示替换操作，dp[i-1][j] 表示删除操作，dp[i][j-1] 表示插入操作。
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[len1][len2];
}

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
