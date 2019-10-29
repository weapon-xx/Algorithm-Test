/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    // 所有求所有集合的题目，都可以马上联想到使用回溯算法
    const res = [];
    function backTrack(all, arr, index, tmp) {
        res.push(tmp);
        for (let i = index; i < arr.length; i += 1) {
            tmp.push(arr[i]);
            backTrack(all, arr, i + 1, tmp.slice());
            tmp.pop();
        }
    }

    backTrack(res, nums, 0, []);
    return res;
}

console.log(subsets([1, 2, 3]));
