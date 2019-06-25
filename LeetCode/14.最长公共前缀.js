/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }
    // 将 0 下边最为初始最大前缀
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i += 1) {
        while (strs[i].indexOf(prefix) !== 0) {
            // 当前项不包含前缀时，前缀需要往前缩减，直至包含前缀为止
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) {
                return '';
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
