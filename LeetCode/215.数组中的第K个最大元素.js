/**
 * 在未排序的数组中找到第 k 个最大的元素
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 示例 1:
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 示例 2:
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    // 思路：
    // 假如需要在长度为 N 的数组中找到第 K 大的数字，那就是找到第 N - k 小的数字
    // 常规思路是直接将数组排序，再去寻找目标数值
    // 使用快速排序的方法，将数组从任意位置划分，分成小、大两个数组
    // 再判断 N - k 在哪个数组中
    const targetIndex = nums.length - k;
    let prevIndex = 0;

    while (nums.length) {
        if (nums.length === 1) return nums[0];
        // 1.找出中位数
        const middleIndex = Math.floor(nums.length / 2);
        const middleNum = nums.splice(middleIndex, 1);

        // 2.切分出左、右两个数组
        const left = [];
        const right = [];
        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] < middleNum) {
                left.push(nums[i]);
            } else {
                right.push(nums[i]);
            }
        }

        // 3.判断目标值在哪个数组中，并且对 nums 进行重新赋值
        if (left.length + prevIndex === targetIndex) {
            return middleNum;
        } if (left.length + prevIndex > targetIndex) {
            nums = left;
        } else {
            prevIndex += left.length + 1;
            nums = right;
        }
    }
    return 0;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
