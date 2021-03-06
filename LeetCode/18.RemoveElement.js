/**
 *
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * 难度: Easy 通过率: 37.9%
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    nums.forEach((num, index) => {
        if (num === val) {
            nums.splice(index, 1);
        }
    });
    return nums;
}

console.log(removeElement([3, 2, 2, 3], 3));
