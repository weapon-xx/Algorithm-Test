/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 示例 1:
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let maxDistance = 0;

    for (let i = 0; i < nums.length; i += 1) {
        // 假如最远跳跃距离小于当前下标值，说明无法跳到当前下标，也就无法跳到终点
        if (i > maxDistance) {
            return false;
        }
        // 计算当前节点的跳跃距离
        const currDistance = i + nums[i];
        if (i !== nums.length - 1 && currDistance >= nums.length - 1) {
            break;
        }
        // 更新最大跳跃距离
        maxDistance = Math.max(maxDistance, currDistance);
    }
    return true;
}

console.log(canJump([0, 2, 3]));
console.log(canJump([2, 3, 1, 1, 4]));
