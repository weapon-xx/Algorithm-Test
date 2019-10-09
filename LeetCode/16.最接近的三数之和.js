/**
 * 给定一个包括 n 个整数的数组 nums 和一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。
 * 假定每组输入只存在唯一答案。
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    if (nums.length === 3) return nums.reduce((a, b) => a + b);

    let res = nums.slice(0, 3).reduce((a, b) => a + b);
    let min = Math.abs(res - target);

    for (let start = 0; start < nums.length - 2; start += 1) {
        for (let end = start + 1; end < nums.length - 1; end += 1) {
            for (let curr = end + 1; curr < nums.length; curr += 1) {
                const sum = nums[start] + nums[end] + nums[curr];
                const abs = Math.abs(sum - target);
                if (abs < min) {
                    min = abs;
                    res = sum;
                }
            }
        }
    }

    return res;
}

console.log(threeSumClosest([-1, 2, 1, -4]));
