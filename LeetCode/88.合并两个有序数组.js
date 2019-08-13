/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 说明:
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6], n = 3
 * 输出: [1,2,2,3,5,6]
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let allLen = m + n - 1;

    while (len1 >= 0 && len2 >= 0) {
        if (nums1[len1] > nums2[len2]) {
            nums1[allLen] = nums1[len1];
            len1 -= 1;
        } else {
            nums1[allLen] = nums2[len2];
            len2 -= 1;
        }
        allLen -= 1;
    }

    return nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1));
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
