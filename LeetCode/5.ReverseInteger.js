/**
* Reverse digits of an integer.
* Example1: x = 123, return 321
* Example2: x = -123, return -321
*
*/

/**
* @param {number} x
* @return {number}
*/
function reverse(x) {
    let num = x;
    const sign = (num > 0) ? 0 : 1;
    num = Math.abs(num);
    const str = num.toString().split('').reverse().join('');
    const result = sign * Number(str);
    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }
    return result;
}

console.log(reverse(1));
