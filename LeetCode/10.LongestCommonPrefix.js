/**
* 找出字符串数组中最长的前缀字符
* 难度: Easy 通过率: 31.0%
*/
/**
* @param {string[]} strs
* @return {string}
*/
function longestCommonPrefix(strs) {
    if (strs === null && strs.length === 0) {
        return '';
    }

    let pre = strs[0];

    let i = 1;
    while (i < strs.length) {
        while (strs[i].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length - 1);
        }
        i += 1;
    }

    return pre || '';
}


console.log(longestCommonPrefix(['a', 'b']));
