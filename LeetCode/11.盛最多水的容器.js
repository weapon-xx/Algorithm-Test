/**
 * container-with-most-water
 * 给定 n 个非负整数 a1，a2，...，an 每个数代表坐标中的一个点(i, ai)。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 *
 * 双指针解法
 * 从数组两边分别定义两个指针，因为两边之间的矩形区域区域总是受到短的一边影响，所以从头尾开始遍历
 * 假如左边较短，则左指针自加
 * 假如右边较短，则右指针自减
 */
function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
