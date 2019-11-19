/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 示例 1:
 * 输入:
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    // 思路：转换为一维数组，使用二分查找法
    if (matrix.length === 0) return false;
    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = rows * cols - 1;

    if (target === matrix[0][0] || target === matrix[rows - 1][cols - 1]) return true;
    if (target < matrix[0][0] || target > matrix[rows - 1][cols - 1]) return false;

    while (left <= right) {
        // 1.计算出中位数
        const middle = parseInt((left + right) / 2, 10);
        // 2.将中位数映射原数组找到对应数值
        const num = matrix[parseInt(middle / cols, 10)][middle % cols];
        if (num === target) {
            return true;
        }
        // 3.判断数值是否大于或小于 target
        if (target < num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return false;
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3));
