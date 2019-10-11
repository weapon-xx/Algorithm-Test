/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 * 根据题纲可知，有效数组需要满足三个条件
 * 1.每行数字唯一；
 * 2.每列数字唯一；
 * 3.3 x 3 表格内数字唯一；
 *
 * 解题思路：
 * 1.参数数独为二位数组，列、行、表格都存储为一个对象，使用字典来实现快速判断是否各个满足条件
 * 2.表格下标公式：parseInt(row / 3) * 3 + parseInt(column / 3)
 */
function isValidSudoku(board) {
    const rows = {}; // 行
    const columns = {}; // 列
    const boxs = {}; // 表格

    let res = true;
    for (let row = 0; row < board.length; row += 1) {
        if (!res) break;
        const currRow = board[row];
        for (let column = 0; column < currRow.length; column += 1) {
            if (!res) break;
            const val = currRow[column];
            if (val === '.') continue;

            if (!rows[row]) {
                rows[row] = {};
            }

            if (rows[row][val]) {
                res = false;
            } else {
                rows[row][val] = true;
            }

            if (!columns[column]) {
                columns[column] = {};
            }

            if (columns[column][val]) {
                console.log(columns[column]);
                res = false;
            } else {
                columns[column][val] = true;
            }

            const boxIndex = parseInt(row / 3, 10) * 3 + parseInt(column / 3, 10);
            if (!boxs[boxIndex]) {
                boxs[boxIndex] = {};
            }
            if (boxs[boxIndex][val]) {
                res = false;
            } else {
                boxs[boxIndex][val] = true;
            }
        }
    }

    return res;
}

console.log(isValidSudoku([
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
