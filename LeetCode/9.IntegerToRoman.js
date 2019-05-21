/**
* Given an integer, convert it to a roman numeral.
* Input is guaranteed to be within the range from 1 to 3999.
* Subscribe to see which companies asked this question.
*
* 给定一个数字，将它转化成罗马数字
* 难度: Medium 通过率: 43.6%
*/

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    const a = ['', 'M', 'MM', 'MMM'];
    const b = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const c = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const d = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    return (a[parseInt(num / 1000, 10)]
        ? a[parseInt(num / 1000, 10)] : '') + (b[parseInt((num % 1000) / 100, 10)]
        ? b[parseInt((num % 1000) / 100, 10)] : '') + (c[parseInt((num % 100) / 10, 10)]
        ? c[parseInt((num % 100) / 10, 10)] : '') + d[num % 10];
}

console.log(intToRoman(11));
