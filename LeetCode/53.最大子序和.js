/**
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），
 * 返回其最大和。
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
function maxSubArray(nums) {
    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i += 1) {
        sum += nums[i];
        max = Math.max(sum, max);
        sum = sum < 0 ? 0 : sum;
    }
    return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
