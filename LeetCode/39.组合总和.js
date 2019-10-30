/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target
 * 找出 candidates 中所有可以使数字和为 target 的组合
 * candidates 中的数字可以无限制重复被选取
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 * 输入: candidates = [2,3,6,7] , target = 7,
 * 所求解集为:
 * [
 *   [7],
 *   [2,2,3]
 * ]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 类似求所有组合的算法题目，大概率都是使用回溯算法
 */
function combinationSum(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b); // 顺序排序
    function combin(result, arr, sum, start, tmp) {
        if (sum === 0) {
            result.push(tmp);
        }
        // 循环条件加上当前数值要小于剩余数值，减少循环次数
        for (let i = start; i < arr.length && arr[i] <= sum; i += 1) {
            tmp.push(arr[i]); // 压栈
            combin(result, arr, sum - arr[i], i, tmp.slice()); // 递归
            tmp.pop(); // 出栈回溯
        }
    }

    combin(res, candidates, target, 0, []);
    return res;
}

console.log(combinationSum([2, 3, 6, 7], 7));
