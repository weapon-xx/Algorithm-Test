/**
      * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
      * Do not allocate extra space for another array, you must do this in place with constant memory.
      *
      * 难度: Easy 通过率: 35.5%
      *
      */
/**
      * @param {number[]} nums
      * @return {number}
      */
var removeDuplicates = function(nums) {
	if (nums.length === 0) return 0;
	var j = 0;
	for (var i = 0; i < nums.length; i++){
		if (nums[i] !== nums[j]) {
			nums[++j] = nums[i];
		}
	}
	return ++j;
};

console.log(removeDuplicates([1, 1, 2]));