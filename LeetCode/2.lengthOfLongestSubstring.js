/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * 给定一个字符串，找出字符串中最长的不包含重复字母的字串的长度
 * 难度: Medium 通过率: 24.0%
 *
 */

function lengthOfLongestSubstring(s) {
    const map = {};
    let left = 0;
    return s.split('').reduce((max, value, index) => {
        left = map[value] >= left ? map[value] + 1 : left;
        map[value] = index;
        return Math.max(max, index - left + 1);
    }, 0);
}

console.log(lengthOfLongestSubstring('abcabcbb'));
