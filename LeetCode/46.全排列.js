/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */
function permute(nums) {
    const res = [];
    // 使用回溯法列举出所有组合排列
    function swap(arr, point = 0) {
        const { length } = arr;
        if (point === length) {
            res.push(arr.slice());
            return;
        }
        for (let i = point; i < length; i += 1) {
            [arr[i], arr[point]] = [arr[point], arr[i]];
            // 把每次交换后的结果继续递归
            swap(arr, point + 1);
            // 调用完后复原
            [arr[point], arr[i]] = [arr[i], arr[point]];
        }
    }

    swap(nums, 0, nums.length);
    return res;
}

console.log(permute([1, 2, 3]));
