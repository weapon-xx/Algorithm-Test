/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j
 * 使得 nums[i] = nums[j]，并且 i 和 j 的差的绝对值小于等于 k
 * 输入: nums = [1, 0, 1, 1], k = 1
 * 输出: true
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    let flag = false;
    const map = {};
    function charge(arr, current, target) {
        const res = arr.filter(index => Math.abs(index - current) <= target);
        return res.length !== 0;
    }
    for (let i = 0; i < nums.length; i += 1) {
        if (flag) break;
        const item = nums[i];
        if (map[item] !== undefined) {
            flag = charge(map[item], i, k);
            map[item].push(i);
        } else {
            map[item] = [];
            map[item].push(i);
        }
    }
    return flag;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
