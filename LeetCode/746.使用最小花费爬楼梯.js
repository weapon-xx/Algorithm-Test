/**
 * 数组的每个索引做为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 * 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 * 示例 1:
 * 输入: cost = [10, 15, 20]
 * 输出: 15
 * 解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    const fp = [];
    [fp[0], fp[1]] = [cost[0], cost[1]];
    cost.push(0);
    for (let i = 2; i < cost.length; i += 1) {
        fp[i] = Math.min(fp[i - 2] + cost[i], cost[i] + fp[i - 1]);
    }
    return fp[cost.length - 1];
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
