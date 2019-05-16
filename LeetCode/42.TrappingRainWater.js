/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 执行用时 : 100 ms, 93.23% 
 * 内存消耗 : 35.7 MB, 21.32%
 */
var trap = function(height) {
	let total = 0;

	const max = Math.max(...height);
	const maxIndex = height.indexOf(max);

	let left = height[0];
	for(let i = 1; i < maxIndex; i++) {
		if(height[i] > left) {
			left = height[i];
		} else {
			total += left - height[i];
		}
	}

	let right = height[height.length - 1];
	for(let i = height.length - 1; i > maxIndex; i--) {
		if(height[i] > right) {
			right = height[i];
		} else {
			total += right - height[i];
		}
	}

	return total;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));   // 6