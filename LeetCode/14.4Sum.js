var fourSum = function(nums, target) {
	var result = [];
	if(nums.lenght < 4) {
		return result;
	}
	nums = nums.sort(function(x, y) {
		return x - y;
	});

	// [-2, -1, 0, 0, 1, 2]

	for(var i = 0; i < nums.length - 3; i++) {
		if(i > 0 && nums[i] === nums[i-1]) continue;
		for(var j = i + 1; j < nums.length - 2; j++) {
			if(j > i + 1 && nums[j] === nums[j-1]) continue;
			var start = j + 1;
			var end = nums.length - 1;
			while(start < end) {
				var sum = nums[i] + nums[j] + nums[start] + nums[end];
				if(sum === target) {
					result.push([nums[i], nums[j], nums[start], nums[end]]);
					while(start < end && nums[start] === nums[start + 1]) start++;
					while(start < end && nums[end] === nums[end - 1]) end--;
					start++;
					end--;
				} else if(sum < target) {
					start++;
				} else {
					end--;
				}
			}
		}
	}

	return result;
};


console.log(fourSum([1, 0, -1, 0, -2, 2], 0));