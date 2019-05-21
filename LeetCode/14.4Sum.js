/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target
 * 判断 nums 中是否存在四个元素 a，b，c 和 d
 * 使得 a + b + c + d 的值与 target 相等？
 * 找出所有满足条件且不重复的四元组。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    const result = [];
    if (nums.lenght < 4) {
        return result;
    }
    nums = nums.sort((x, y) => x - y);

    // [-2, -1, 0, 0, 1, 2]

    for (let i = 0; i < nums.length - 3; i += 1) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j += 1) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let start = j + 1;
            let end = nums.length - 1;
            while (start < end) {
                const sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start + 1]) start += 1;
                    while (start < end && nums[end] === nums[end - 1]) end -= 1;
                    start += 1;
                    end -= 1;
                } else if (sum < target) {
                    start += 1;
                } else {
                    end -= 1;
                }
            }
        }
    }

    return result;
}


console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
