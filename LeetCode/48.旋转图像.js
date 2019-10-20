/**
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度。
 * 说明：
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 示例 1:
 * 给定 matrix =
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ],
 * 原地旋转输入矩阵，使其变为:
 * [
 *  [7,4,1],
 *  [8,5,2],
 *  [9,6,3]
 * ]
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    const { length } = matrix;
    for (let i = 0; i < parseInt((length + 1) / 2, 10); i += 1) {
        for (let j = 0; j < parseInt(length / 2, 10); j += 1) {
            const temp = matrix[length - j - 1][i];
            matrix[length - j - 1][i] = matrix[length - i - 1][length - j - 1];
            matrix[length - i - 1][length - j - 1] = matrix[j][length - i - 1];
            matrix[j][length - i - 1] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    return matrix;
}

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
