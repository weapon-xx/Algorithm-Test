/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * 有两个排序数组 nums1 和 nums2 ， 找出两个数组中的中位数
 * 难度: Hard 通过率: 21.2%
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
	var newArr = nums1.concat(nums2);
	var middleIndex;
	newArr = newArr.sort((x, y) => {
		return x - y;
	});
	if(newArr.length % 2 === 0) {
		middleIndex  = newArr.length / 2;
		return (newArr[middleIndex] + newArr[middleIndex - 1]) / 2;
	} else {
		middleIndex = Math.floor(newArr.length / 2);
		return newArr[middleIndex];
	}
};

console.log(findMedianSortedArrays([1,2], [3,4]));