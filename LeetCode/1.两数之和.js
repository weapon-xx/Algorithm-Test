/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
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

    for (let i = 0; i < nums.length; i += 1) {
        const value = nums[i];
        var remain = target - value;
		if(obj[remain] && i !== obj[remain]) {
			return [i, obj[remain]];
		}
    }
    return [];
}

console.log(twoSum([3, 2, 4], 6));