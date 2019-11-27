/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 示例:
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 进阶：
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    if (nums.length === 0) return nums;

    // 定义三个指针，left 指向 0 的右边界，right 指向 2 的左边界，curr 指向当前下标
    let left = 0;
    let right = nums.length - 1;
    let curr = 0;

    // 开始遍历
    while (curr <= right) {
        if (nums[curr] === 2) {
            // 等于 2 时，进行右交换，right--
            // curr 不用自加，因为右交换的值还没检索过，需要再遍历检索一遍
            [nums[curr], nums[right]] = [nums[right], nums[curr]];
            right -= 1;
        } else if (nums[curr] === 0) {
            // 等于 0 时，进行左交换，left++，curr++
            // 因为是从左边开始遍历的，左边的值都已经检索过，交换后 curr 自加
            [nums[curr], nums[left]] = [nums[left], nums[curr]];
            curr += 1;
            left += 1;
        } else {
            // 等于 1 时，curr++
            curr += 1;
        }
    }

    return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
