/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例 1:
 * 输入: 123
 * 输出: 321
*/
/**
* @param {number} x
* @return {number}
*/
function reverse(x) {
    let num = x;
    const sign = (num > 0) ? 1 : -1;
    num = Math.abs(num);
    const str = num.toString().split('').reverse().join('');
    const result = sign * Number(str);
    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }
    return result;
}

console.log(reverse(1));
