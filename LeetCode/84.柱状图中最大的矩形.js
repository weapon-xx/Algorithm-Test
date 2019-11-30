/**
 * 难度：Hard
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 示例:
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    if (heights.length === 0) return 0;
    let res = 0;
    const len = heights.length;
    // 1.遍历数组
    for (let i = 0; i < heights.length; i += 1) {
        const val = heights[i];
        // 2.以当前坐标为中心，向左找到最后一位大于当前数值的下标
        let left = i;
        while (left >= 0 && heights[left] >= val) {
            left -= 1;
        }

        // 3.以当前坐标为中心，向右找到最后一位大于当前数值的下标
        let right = i;
        while (right < len && heights[right] >= val) {
            right += 1;
        }
        // 4.计算区间内的最大面积
        res = Math.max(res, val * (right - left - 1));
    }

    // 时间复杂度 O(n2)，空间复杂度 O(1)
    return res;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
