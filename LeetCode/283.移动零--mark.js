/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    // 思路：
    // 使用变量 j 来记录 0 的下标
    let j = -1;
    for (let i = 0; i < nums.length; i += 1) {
        // 假如数值不为 0 时，j 加一，并且 i 与 j 互换
        if (nums[i] !== 0) {
            j += 1;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    return nums;
}

// [0,1,0,3,12], i = 0, j = -1
// [1,0,0,3,12], i = 1, j = 0
// [1,0,0,3,12], i = 2, j = 0
// [1,3,0,0,12], i = 3, j = 1
// [1,3,12,0,0], i = 4, j = 2
console.log(moveZeroes([0, 1, 0, 3, 12]));
