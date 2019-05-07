/**
      *
      * Given an array S of n integers, find three integers in S such that the sum is closest to
      * a given number, target. Return the sum of the three integers.
      * You may assume that each input would have exactly one solution.
      * For example, given array S = {-1 2 1 -4}, and target = 1.
      * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
      *
      * 难度: Medium 通过率: 30.7%
      *
      */

/**
       * @param {number[]} nums
       * @param {number} target
       * @return {number}
       */
var threeSumClosest = function(nums, target) {
	var result = nums[0] + nums[1] + nums[nums.length - 1];
	nums = nums.sort(function(x, y) {
		return x - y;
	});

	for(var i = 0; i < nums.length - 2; i++) {
		var start = i + 1;
		var end = nums.length - 1;
		while(start < end) {
			var sum = nums[i] + nums[start] + nums[end];
			if(sum > target) {
				end--;
			} else if(sum < target) {
				start++;
			} else {
				return target;
			}
			if(Math.abs(sum - target) < Math.abs(result - target)) {
				result = sum;
			}
		}
	}
	return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));