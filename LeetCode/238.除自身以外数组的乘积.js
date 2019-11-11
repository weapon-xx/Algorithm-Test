/**
 * 难度：Medium
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output，其中 output[i] 等于
 * nums 中除 nums[i] 之外其余各元素的乘积。
 * 示例:
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    // 思路：当前数值 = 左边乘积 * 右边乘积，并且要求时间复杂度为 O(n)
    const res = [];

    // 1.先使用一次遍历计算出左边乘积，并且保存到数组当中
    let left = 1;
    for (let i = 0; i < nums.length; i += 1) {
        res[i] = left;
        left *= nums[i];
    }

    // 2.再遍历一次，使用右边乘积 * 左边乘积得出结果
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        res[i] *= right;
        right *= nums[i];
    }

    return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
