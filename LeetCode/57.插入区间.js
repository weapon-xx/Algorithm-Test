/**
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * 示例 1:
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 * 示例 2:
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    const res = [];

    // 1.标记需要合并的区间边界
    let [left, right] = newInterval;
    for (let i = 0; i < intervals.length; i += 1) {
        const [currLeft, currRight] = intervals[i];
        // 2.假如不重叠，直接 push 当前区间
        if (currRight < left || currLeft > right) {
            res.push(intervals[i]);
        } else {
            // 3.假如当前区间在合并区间内，则跳过
            if (left <= currLeft && right >= currRight) {
                continue;
            }
            // 4.更新区间边界
            right = Math.max(currRight, right);
            left = Math.min(currLeft, left);
        }
    }

    // 5.push 到结果中，排序后返回，时间复杂度 O(n)
    res.push([left, right]);
    return res.sort((a, b) => a[0] - b[0]);
}


console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
