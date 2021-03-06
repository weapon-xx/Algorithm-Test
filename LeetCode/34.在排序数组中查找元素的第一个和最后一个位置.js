/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置
 * 你的算法时间复杂度必须是 O(log N) 级别
 * 如果数组中不存在目标值，返回 [-1, -1]
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    const res = [-1, -1];
    // 双指针解法
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === target) {
            res[0] = i;
            break;
        }
    }
    if (res[0] === -1) {
        return res;
    }
    for (let j = nums.length - 1; j >= 0; j -= 1) {
        if (nums[j] === target) {
            res[1] = j;
            break;
        }
    }
    return res;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
