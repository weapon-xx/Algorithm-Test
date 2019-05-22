/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (map.has(num)) {
            nums.splice(i, 1);
            i -= 1;
        } else {
            map.set(num, 1);
        }
    }
    return nums.length;
}

console.log(removeDuplicates([1, 1, 2])); // [1, 2]
