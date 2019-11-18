/**
 * 难度：Easy
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let res = '';
    let flag = 0; // 是否进位

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i -= 1, j -= 1) {
        let sum = flag;
        sum += i >= 0 ? parseInt(a[i], 10) : 0;
        sum += j >= 0 ? parseInt(b[j], 10) : 0;
        res += sum % 2;
        flag = Math.floor(sum / 2);
    }

    res += flag ? '1' : '';

    return res.split('').reverse().join('');
}

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
