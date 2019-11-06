/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    // 中心扩展算法
    if (s.length === 1) return s;

    function expandAroundCenter(str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left -= 1;
            right += 1;
        }
        return right - left - 1;
    }

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i += 1) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - parseInt((len - 1) / 2, 10);
            end = i + parseInt(len / 2, 10);
        }
    }
    return s.slice(start, end + 1);
}

console.log(longestPalindrome('babab'));
