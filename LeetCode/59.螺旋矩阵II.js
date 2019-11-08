/**
 * 给定一个正整数 n，生成一个包含 1 到 n2 所有元素
 * 且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 示例:
 * 输入: 3
 * 输出:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
    const res = [];
    let up = 0;
    let down = n - 1;
    let left = 0;
    let right = n - 1;

    for (let i = 0; i < n; i += 1) {
        res.push(new Array(n));
    }

    let count = 1;
    while (true) {
        // 左 -> 右
        for (let i = left; i <= right; i += 1) {
            res[up][i] = count;
            count += 1;
        }
        up += 1;
        if (up > down) break;

        // 上 -> 下
        for (let i = up; i <= down; i += 1) {
            res[i][right] = count;
            count += 1;
        }
        right -= 1;
        if (right < left) break;

        // 右 -> 左
        for (let i = right; i >= left; i -= 1) {
            res[down][i] = count;
            count += 1;
        }
        down -= 1;
        if (down < up) break;

        // 下 -> 上
        for (let i = down; i >= up; i -= 1) {
            res[i][left] = count;
            count += 1;
        }
        left += 1;
        if (left > right) break;
    }

    return res;
}

console.log(generateMatrix());
