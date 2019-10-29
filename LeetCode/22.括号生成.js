/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const res = [];
    function generate(str = '', left = 0, right = 0) {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        // 回溯法递归
        if (left < n) {
            generate(`${str}(`, left + 1, right);
        }
        if (right < left) {
            generate(`${str})`, left, right + 1);
        }
    }
    generate();
    return res;
}

console.log(generateParenthesis(3));
