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
var letterCombinations = function(digits) {
	digits = digits.toString();
	var arr = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

	var result = [''];

	// 遍历输入号码
	for(var i = 0; i < digits.length; i++) {
		var str = arr[digits[i]];
		var cache = [];
		// 遍历号码对应的字符
		for(var x = 0; x < str.length; x++) {
			for(var y = 0; y < result.length; y++) {
				// 和之前在 result 数组中的字符相加
				cache.push(result[y] + str[x]);
			}
		}
		// 重新覆盖 result 数组
		result = cache;
	}

	// 判断是否输入 '' ，是的话重写 result
	if(result.length === 1 && result[0] === '') {
		result = [];
	}

	return result;
};

console.log(letterCombinations(23));