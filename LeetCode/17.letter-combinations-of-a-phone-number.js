/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    let result = [];

    for (let j = 0; j < digits.length; j += 1) {
        const digit = digits[j];
        const temp = [];
        for (let i = 0; i < map[digit]; i += 1) {
            const char = map[digit][i];
            if (result.length > 0) {
                result.forEach((item) => {
                    temp.push(item + char);
                });
            } else {
                temp.push(char);
            }
        }

        result = temp;
    }
    return result;
}

console.log(letterCombinations('234'));
// ["adg", "bdg", "cdg", "aeg", "beg", "ceg",
// "afg", "bfg", "cfg", "adh", "bdh", "cdh",
// "aeh", "beh", "ceh", "afh", "bfh", "cfh",
// "adi", "bdi", "cdi", "aei", "bei", "cei", "afi", "bfi", "cfi"]
