/**
* Determine whether an integer is a palindrome. Do this without extra space.
*
* 定义数字中的回文，没有多余多余的空格
*
* 难度: Easy 通过率: 34.5%
*/

/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function(x) {
	if(x<0 || (x != 0 && x % 10 === 0)) {
		return false;
	}
	var rev = 0;
	while (x>rev){
		rev = rev*10 + x%10;
		x = (x * 1000)/10000;
	}
	return (x==rev || x==rev/10);
};

console.log(isPalindrome(11));