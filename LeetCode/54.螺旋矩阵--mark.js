/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 示例 1:
 * 输入:
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    if (matrix.length === 0) return matrix;
    const res = [];
    let up = 0; // 上
    let down = matrix.length - 1; // 下
    let left = 0; // 左
    let right = matrix[0].length - 1; // 右

    while (true) {
        // 从左向右
        for (let i = left; i <= right; i += 1) {
            res.push(matrix[left][i]);
        }
        // 重新设置上边界值
        up += 1;
        if (up > down) break;

        // 从上向下
        for (let i = up; i <= down; i += 1) {
            res.push(matrix[i][right]);
        }
        // 重新设置右边界值
        right -= 1;
        if (right < left) break;

        // 从右向左
        for (let i = right; i >= left; i -= 1) {
            res.push(matrix[down][i]);
        }
        // 重新设置下边界值
        down -= 1;
        if (down < up) break;

        // 从下向上
        for (let i = down; i >= up; i -= 1) {
            res.push(matrix[i][left]);
        }
        // 重新设置左边界值
        left += 1;
        if (left > right) break;
    }
    return res;
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
