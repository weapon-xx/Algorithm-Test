/**
      * Implement atoi to convert a string to an integer.
      * Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.
      * Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
      *
      * 函数输入一个字符串，要求将它转化成整数并返回
      * 返回值是在 2147483647 -- -2147483648 之间的
      * 难度: Medium 通过率: 13.9%
      *
      */

/**
      * @param {string} str
      * @return {number}
      */
var myAtoi = function(str) {
	return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};

console.log(myAtoi('2147483648'));