/**
 * 给定一个字符串，请你找出其中不含有重复字符的「最长子串」的长度。
 * 示例1:
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例 2:
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let max = 0;
    let temp = '';
    for (let i = 0; i < s.length; i += 1) {
        const word = s[i];
        if (!temp.includes(word)) {
            temp += word;
            max = Math.max(max, temp.length);
        } else {
            temp = (temp.split(word)[1] || '') + word;
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
