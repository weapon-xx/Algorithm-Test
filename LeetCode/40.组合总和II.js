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
function combinationSum2(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    function search(arr, num, index, temp) {
        if (num === 0) {
            res.push(temp.slice());
            return;
        }
        for (let i = index; i < arr.length && arr[i] <= num; i += 1) {
            if (i > index && arr[i] === arr[i - 1]) {
                continue;
            }
            temp.push(arr[i]);
            search(arr, num - arr[i], i + 1, temp);
            temp.pop();
        }
    }

    search(candidates, target, 0, []);
    return res;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
