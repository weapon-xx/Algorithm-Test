/**
      * @param {string} s
      * @return {boolean}
      */

var isValid = function(s) {
	var stack = [];
	for(var i = 0; i < s.length; i++) {
		if(s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{') {
			stack.push(s.charAt(i));
		} else if(s.charAt(i) === ')' && stack.length !== 0 && stack.indexOf('(') !== -1) {
			stack.pop();
		} else if(s.charAt(i) === ']' && stack.length !== 0 && stack.indexOf('[') !== -1) {
			stack.pop();
		} else if(s.charAt(i) === '}' && stack.length !== 0 && stack.indexOf('{') !== -1) {
			stack.pop();
		} else {
			return false;
		}
	}

	return stack.length === 0;
};

console.log(isValid('()'));