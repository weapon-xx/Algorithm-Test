/**
 * 给定 n 个非负整数表示每个宽度为1的柱子的高度图
 * 计算按此排列的柱子，下雨之后能接多少雨水。
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）
 *
 * 示例:
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 */
function trap(height) {
    // 0.将雨水保存在总数变量当中
    let total = 0;

    // 1.先找出数组中最高的点
    const max = Math.max(...height);
    const maxIndex = height.indexOf(max);

    // 2.从头向最最高点进行遍历
    let left = height[0];
    for (let i = 1; i < maxIndex; i += 1) {
        // 3.假如当前数值大于 left，则重新赋值
        if (height[i] > left) {
            left = height[i];
        } else {
            // 4.否则将用之前保存的最大值减去当前数组算出高度差
            total += left - height[i];
        }
    }

    // 5.尾部向最高点遍历，思路同上
    let right = height[height.length - 1];
    for (let i = height.length - 1; i > maxIndex; i -= 1) {
        if (height[i] > right) {
            right = height[i];
        } else {
            total += right - height[i];
        }
    }

    return total;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
