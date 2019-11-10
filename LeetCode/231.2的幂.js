/**
 * 难度： Easy
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 示例 1:
 * 输入: 1
 * 输出: true
 * 解释: 20 = 1
 * 示例 2:
 * 输入: 16
 * 输出: true
 * 解释: 24 = 16
 * 示例 3:
 * 输入: 218
 * 输出: false
 */
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    // 思路：假如 N 是 2 的幂次方，那它必定满足条件
    // N & (n - 1) = 0，比如 4 & 3 = 0，(100 & 011)
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(1));
