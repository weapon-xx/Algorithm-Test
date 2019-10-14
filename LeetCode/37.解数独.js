/**
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 一个数独的解法需遵循如下规则：
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 *
 * 解题思路：
 * 由题目可知，数独解需要满足以上三个条件
 * 1.首先遍历数独的二位数组，分别使用三个字典变量来记录行、列、3x3 表格内出现过的数字；
 * 2.对二维数组从左到右、从上到下进行遍历，对每个空格进行 0 - 9 数字进行匹配
 * 3.因为在匹配的过程中，会产生多种可能性，但是只有唯一解，所以确定解题方式为回溯，
 * 配合使用递归，函数体内匹配成功返回 true，假如发现匹配失败时返回 false，并回溯上一位再进行匹配
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
    const rowsMap = {};
    const colsMap = {};
    const boxesMap = {};

    for (let row = 0; row < board.length; row += 1) {
        const currRow = board[row];
        for (let col = 0; col < currRow.length; col += 1) {
            const val = currRow[col];
            rowsMap[row] = rowsMap[row] || {};
            rowsMap[row][val] = true;

            colsMap[col] = colsMap[col] || {};
            colsMap[col][val] = true;

            const index = parseInt(row / 3, 10) * 3 + parseInt(col / 3, 10);
            boxesMap[index] = boxesMap[index] || {};
            boxesMap[index][val] = true;
        }
    }

    function back(arr, rows, cols, boxes, row, col) {
        // 假设全部匹配完成，则退出递归
        if (col === arr[0].length) {
            col = 0;
            row += 1;
            if (row === arr.length) {
                return true;
            }
        }

        // 判断是否为空
        if (arr[row][col] === '.') {
            const index = parseInt(row / 3, 10) * 3 + parseInt(col / 3, 10);
            for (let i = 1; i <= 9; i += 1) {
                // 判断是否满足条件
                if (!rows[row][i] && !cols[col][i] && !boxes[index][i]) {
                    rows[row][i] = true;
                    cols[col][i] = true;
                    boxes[index][i] = true;
                    arr[row][col] = `${i}`;
                    // 继续递归下一位，判断是否满足条件
                    if (back(arr, rows, cols, boxes, row, col + 1)) {
                        return true;
                    }
                    // 不满足时回溯
                    rows[row][i] = false;
                    cols[col][i] = false;
                    boxes[index][i] = false;
                    arr[row][col] = '.';
                }
            }
        } else {
            // 继续递归下一位
            return back(arr, rows, cols, boxes, row, col + 1);
        }

        return false;
    }

    back(board, rowsMap, colsMap, boxesMap, 0, 0);

    return board;
}

console.log(solveSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));
