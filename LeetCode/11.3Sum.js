/**
          * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
          * Find all unique triplets in the array which gives the sum of zero.
          *
          * 难度: Medium 通过率: 	21.4%
          *
          */
/**
         * @param {number[]} nums
         * @return {number[][]}
         */
var threeSum = function(nums) {
	nums = nums.sort(function(x, y) {
		return x - y;
	});
  
	// nums = [-4, -1, -1, 0, 1, 2]
	var result = [];
  
	for(var i = 0; i < nums.length - 2; i++) {
		// 排除重复数字
		if(i > 0 && nums[i] === nums[i-1]) continue;
		// if(i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
		var start = i + 1;
		var end = nums.length - 1;
		var sum = 0 - nums[i];
		while(start < end) {
			if(nums[start] + nums[end] === sum) {
				result.push([nums[i], nums[start], nums[end]]);
				while(start < end && nums[start] === nums[start + 1]) start++;
				while(start < end && nums[end] === nums[end + 1]) end--;
				start++;
				end--;
			} else if(nums[start] + nums[end] < sum) {
				start++;
			} else {
				end--;
			}
		}
		// }
	}
  
	return result;
};
  
  
console.log(threeSum([-1, 0, 1, 2, -1, -4]));