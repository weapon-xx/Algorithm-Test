/**
* 函数输入一个字符串，要求将它转化成整数并返回
* 返回值是在 2147483647 -- -2147483648 之间的
* 难度: Medium 通过率: 13.9%
*
*/
/**
* @param {string} str
* @return {number}
*/
function myAtoi(str) {
    return Math.max(Math.min(parseInt(str, 10) || 0, 2147483647), -2147483648);
}

console.log(myAtoi('2147483648'));
