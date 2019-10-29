/**
 * 给定一个数组 candidates 和一个目标数 target
 * 找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 说明：
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8
 * 所求解集为:
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 39题的变形，关键地方在于每个数字只能使用一次
 */
function combinationSum2(candidates, sum) {
    const res = [];
    // 先对数组进行排序
    candidates = candidates.sort((a, b) => a - b);

    function combina(all, arr, start, tmp, target) {
        if (target === 0) {
            all.push(tmp);
            return;
        }

        for (let i = start; i < arr.length && arr[i] <= target; i += 1) {
            // 判断当前下标 i 是否大于 start，且当前值等于前一个值
            // 避免数字的重复使用，如 [1, 1, 1]
            if (i > start && arr[i] === arr[i - 1]) {
                continue;
            } else {
                // 压栈
                tmp.push(arr[i]);
                // 将 i 加一后再调用递归
                combina(all, arr, i + 1, tmp.slice(), target - arr[i]);
                // 出栈回溯
                tmp.pop();
            }
        }
    }

    combina(res, candidates, 0, [], sum);
    return res;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
