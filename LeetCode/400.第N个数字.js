/**
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11...中找到第 n 个数字。
 * 注意:
 * n 是正数且在32为整形范围内 ( n < 231)
 * 输入: 3
 * 输出: 3
 */
/**
 * @param {number} n
 * @return {number}
 * 1-9有9个数，10-99有 180个数字
 * 1.即 9 * Math.pow(10, i - 1) * i， i为数值位数
 * 2.找出数值 i 对应区间，再找出对应的数字
 * 3.找出对应的下标值
 * 4.转化成字符串，根据下标直接返回
 */
function findNthDigit(n) {
    let digit = 0;
    let all = 0;
    while (all < n) {
        digit += 1;
        all += 9 * (10 ** (digit - 1)) * digit;
    }

    const areaDigit = n - all + 9 * (10 ** (digit - 1)) * digit;
    let num = (areaDigit - 1) / digit;
    const index = (areaDigit - 1) % digit;
    num += 10 ** (digit - 1);
    return +(String(num)[index]);
}

console.log(findNthDigit(187)); // 98 -> 8
