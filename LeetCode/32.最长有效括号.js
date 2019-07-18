/**
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 */
/**
 * @param {string} s
 * @return {number}
 * 使用「栈」解法，时间复杂度 O(n)
 */
function longestValidParentheses(s) {
    const stack = [-1];
    let max = 0;

    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            // 假如栈清空时，仍 push 当前下标
            if (stack.length === 0) {
                stack.push(i);
            } else {
                // 当前下标减去栈尾下标，再进行对比
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }

    return max;
}

console.log(longestValidParentheses(')()())')); // 4
