/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 示例 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    let newArr = nums1.concat(nums2);
    let middleIndex;
    newArr = newArr.sort((x, y) => x - y);
    if (newArr.length % 2 === 0) {
        middleIndex = newArr.length / 2;
        return (newArr[middleIndex] + newArr[middleIndex - 1]) / 2;
    }
    middleIndex = Math.floor(newArr.length / 2);
    return newArr[middleIndex];
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
