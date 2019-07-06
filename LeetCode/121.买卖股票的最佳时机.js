/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票）
 * 设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 */
/**
 * @param {number[]} prices
 * @return {number}
 * 根据题目分析，题解是等于一段数值间最大值减去最小值，那么需要两个变量实现
 * 一个变量 max 记录最大差值
 * 一个变量 min 记录最小值
 * 时间复杂度：O(n) 只需要遍历一次
 * 空间复杂度：O(1) 只使用了两个变量
 */
function maxProfit(prices) {
    let max = 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i += 1) {
        if (prices[i] < min) {
            // 当前数值小于最小值时，更新最小值
            min = prices[i];
        } else if (prices[i] - min > max) {
            // 更新最大差值
            max = prices[i] - min;
        }
    }
    return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([1, 2])); // 1
