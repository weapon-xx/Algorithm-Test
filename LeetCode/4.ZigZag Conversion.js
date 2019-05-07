/**
      * @param {string} s
      * @param {number} numRows
      * @return {string}
      */
var convert = function(s, numRows) {
	var doubleArr = [];
	var counter = 1;
	var innerCounter = 0;
	var result = '';
	for(var i = 0; i < numRows; i++) {
		doubleArr.push([]);
	}
	s.split('').forEach((value, index) => {
		if(index < counter * numRows + (counter - 1)) {
			innerCounter = innerCounter === numRows ? 0 : innerCounter;
			doubleArr[innerCounter].push(value);
			innerCounter = ++innerCounter;
		} else if(index === counter * numRows + (counter - 1)) {
			for (var i = 0; i < numRows; i++) {
				doubleArr[index - counter * numRows].push(value);
			}
			counter = ++counter;
		}
	});
	doubleArr.forEach((value) => {
		result += value.join('');
	});
	return result;
};

console.log(convert('ABCD', 1));