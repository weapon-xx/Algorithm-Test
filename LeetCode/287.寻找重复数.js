/**
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n）
 * 可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 * 示例 1:
 * 输入: [1,3,4,2,2]
 * 输出: 2
 * 示例 2:
 * 输入: [3,1,3,4,2]
 * 输出: 3
 * 说明：
 * 1.不能更改原数组（假设数组是只读的）。
 * 2.只能使用额外的 O(1) 的空间。
 * 3.时间复杂度小于 O(n2) 。
 * 4.数组中只有一个重复的数字，但它可能不止重复出现一次。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    // 思路：题目有几点要求，不使用额外的空间，时间复杂度小于 O(n2)
    // 使用二分法，对数组的值进行划分（而不是下标），因为由题纲可知假设数组长度为 n + 1，那么值范围是 1 ~ n
    const len = nums.length;
    let left = 1;
    let right = len - 1;

    while (left < right) {
        // 计算出中位数
        const mid = left + parseInt((right - left) / 2, 10);
        let count = 0;
        // 对数组进行遍历，将每一项将数组进行对比，计算出 1 ~ mid 区间中有多少位
        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] <= mid) {
                count += 1;
            }
        }

        // 假设 count 大于 mid，则将右边界更新，否则更新左边界
        if (count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    // 二分法时间复杂度为 O(logN)，在二分法内部有数组遍历，总体时间复杂度为 O(NlogN)
    // 空间复杂度只使用一个 count，复杂度为 O(1)
    return left;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
