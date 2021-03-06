/**
 * 给定一个整数数组，判断是否存在重复元素
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false
 * 输入: [1, 2, 3, 1]
 * 输出: true
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    if (nums.length === 0) {
        return false;
    }
    let flag = false;
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        const item = nums[i];
        if (map[item] !== undefined) {
            flag = true;
            break;
        } else {
            map[item] = item;
        }
    }
    return flag;
}

console.log(containsDuplicate([1, 2, 3, 1]));
