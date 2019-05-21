/**
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 *
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    digits = digits.toString();
    const arr = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    let result = [''];

    // 遍历输入号码
    for (let i = 0; i < digits.length; i += 1) {
        const str = arr[digits[i]];
        const cache = [];
        // 遍历号码对应的字符
        for (let x = 0; x < str.length; x += 1) {
            for (let y = 0; y < result.length; y += 1) {
                // 和之前在 result 数组中的字符相加
                cache.push(result[y] + str[x]);
            }
        }
        // 重新覆盖 result 数组
        result = cache;
    }

    // 判断是否输入 '' ，是的话重写 result
    if (result.length === 1 && result[0] === '') {
        result = [];
    }

    return result;
}

console.log(letterCombinations(23));
