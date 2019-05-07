function generateParenthesis(n){
	var list = [];
	backtrack(list, '', 0, 0, n);
	return list;
}

function backtrack(list, str, open, close, max){
	if(str.length == max*2){
		list.push(str);
		return;
	}

	if(open < max)
		backtrack(list, str+'(', open+1, close, max);
	if(close < open)
		backtrack(list, str+')', open, close+1, max);
}

console.log(generateParenthesis(2));