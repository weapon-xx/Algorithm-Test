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
function isPalindrome(x) {
    let num = x;
    if (num < 0 || (num !== 0 && num % 10 === 0)) {
        return false;
    }
    let rev = 0;
    while (num > rev) {
        rev = rev * 10 + (num % 10);
        num = (num * 1000) / 10000;
    }
    return (num === rev || num === rev / 10);
}

console.log(isPalindrome(11));
