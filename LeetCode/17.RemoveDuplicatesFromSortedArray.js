/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * 难度: Easy 通过率: 35.5%
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let j = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== nums[j]) {
            nums[j += 1] = nums[i];
        }
    }
    j += 1;
    return j;
}

console.log(removeDuplicates([1, 1, 2]));
