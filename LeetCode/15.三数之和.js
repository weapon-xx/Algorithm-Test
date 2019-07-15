/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a b c
 * 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 双指针解法，需要注意去重
 */
function threeSum(nums) {
    const res = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] > 0) { break; }
        if (i > 0 && nums[i] === nums[i - 1]) { continue; }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left += 1;
            } else if (sum > 0) {
                right -= 1;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left += 1; // 去重
                while (left < right && nums[right] === nums[right - 1]) right -= 1; // 去重
                left += 1;
                right -= 1;
            }
        }
    }

    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
