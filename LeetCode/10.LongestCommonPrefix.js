/**
        * Write a function to find the longest common prefix string amongst an array of strings.
        * 找出字符串数组中最长的前缀字符
        * 难度: Easy 通过率: 	31.0%
        */
/**
        * @param {string[]} strs
        * @return {string}
        */

var longestCommonPrefix = function(strs) {
	if(strs === null && strs.length === 0) {
		return '';
	}

	var pre = strs[0];

	var i = 1;
	while(i < strs.length) {
		while(strs[i].indexOf(pre) != 0) {
			pre = pre.substring(0, pre.length - 1);
		}
		i++;
	}

	return pre ? pre : '';
};


console.log(longestCommonPrefix(['a', 'b']));