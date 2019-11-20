/**
 * 给定一个整数数组 nums，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
 * 示例 1:
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6
 * 示例 2:
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    // 思路：动态规划
    if (nums.length === 0) return 0;

    // 使用两个变量用来分别记录最大、最小值
    let imax = 1;
    let imin = 1;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i += 1) {
        // 当前数值小于 0 时，需要将最大、最小值进行互换，因为最大会变成最小，最小会变成最大
        if (nums[i] < 0) {
            [imax, imin] = [imin, imax];
        }

        // 更新最大、最小值
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);
        // 最后更新结果值
        max = Math.max(imax, max);
    }

    return max;
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
