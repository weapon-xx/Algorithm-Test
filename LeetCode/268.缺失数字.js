/**
 * 给定一个包含 0, 1, 2 ... n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * 示例 1:
 * 输入: [3, 0, 1]
 * 输出: 2
 * 示例 2:
 * 输入: [9, 6, 4, 2, 3, 5, 7, 0, 1]
 * 输出: 8
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    let res;
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        map[nums[i]] = true;
    }
    const len = nums.length + 1;
    for (let i = 0; i < len; i += 1) {
        if (!map[i]) {
            res = map[i];
            break;
        }
    }
    return res;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
