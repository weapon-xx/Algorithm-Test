/**
 * 难度：Medium
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 示例 1:
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 示例 2:
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (intervals.length === 0) return intervals;
    // 1.将数组先排序
    intervals.sort((a, b) => a[0] - b[0]);

    const res = [];
    // 2.定义两个左、右边界
    let [left, right] = intervals[0];
    // 3.从第二个区间开始遍历
    for (let i = 1; i < intervals.length; i += 1) {
        // 4.判断当前左边界是否大于 right
        if (intervals[i][0] <= right) {
            // 并且右边界也大于 right，则重新赋值 right
            if (intervals[i][1] > right) [, right] = intervals[i];
        } else {
            // 5.否则就将当前 left、right 保存起来
            res.push([left, right]);
            // 6.left、right 更新为下一个区间
            [left, right] = intervals[i];
        }
    }
    // 7.将最后的区间 push 到 res
    res.push([left, right]);
    return res;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));
