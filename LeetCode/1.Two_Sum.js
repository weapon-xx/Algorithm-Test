/** Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1]
 */

/**
 * 传递一个整数数组和 target，返回数组中两个值相加等于 target 的下标 index 组成的数组
 * 难度: easy 通过率: 31.8%
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     var remain
//     var result
//     for(var i = 0, length = nums.length; i < length; i++) {
//         remain = target - nums[i]
//         if(result === void 0) {
//           for(var j = 0; j < nums.length; j++) {
//               if(i === j) continue
//               if(remain === nums[j]) {
//                 result = [i].concat([j])
//                 break
//               }
//           }
//         } else {
//           break
//         }
//
//     }
//     result = result === void 0 ? -1 : result
//     return result
// };

// var twoSum = function(nums, target) {
//   var copyArr = []
//   nums.forEach((val) => {
//     copyArr.push(val)
//   })
//   copyArr.sort((x, y) => {
//     return x - y
//   })
//
//   var start = 0
//   var end = nums.length - 1
//   var a, b
//
//   while(start < end) {
//     var sum = copyArr[start] + copyArr[end]
//     if(sum < target) {
//       start++
//     } else if (sum > target) {
//       end--
//     } else if (sum === target) {
//       a = copyArr[start]
//       b = copyArr[end]
//       break
//     }
//   }
//   return [nums.indexOf(a), nums.indexOf(b)]
// }

var twoSum = function(nums, target) {
	var obj = {};
	nums.forEach((value, index) => {
		obj[value] = index;
	});

	console.log(obj);
	nums.forEach((value, index) => {
		var remain = target - value;
		if(obj[remain] && index !== obj[remain]) {
			return [index, obj[remain]];
		}
	});
};

console.log(twoSum([3, 2, 4], 6));