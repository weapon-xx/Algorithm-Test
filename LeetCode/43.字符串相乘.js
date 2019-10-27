/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2
 * 返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 示例 1:
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 示例 2:
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const length1 = num1.length;
    const length2 = num2.length;
    // 使用数组保存竖式的乘积之和
    const arr = new Array(length1 + length2 - 1).fill(0);
    for (let x = 0; x < length1; x += 1) {
        for (let y = 0; y < length2; y += 1) {
            arr[x + y] += parseInt(num1[x], 10) * parseInt(num2[y], 10);
        }
    }

    let currNum = 0; // 初始化当前数字为 0
    let str = ''; // 计算结果字符串
    let len = arr.length - 1;
    // 从后往前依序遍历
    while (len >= 0) {
        // 当前数字与数组中的乘积和相加
        currNum += arr[len];
        // 求出余数
        str = (currNum % 10) + str;
        // 求出个数往前数字，比如 152 -> 150
        currNum = parseInt(currNum / 10, 10);
        len -= 1;
    }

    // 假如有进位，则需要将进位与字符串相加再返回
    return currNum > 0 ? (currNum + str) : str;
}

console.log(multiply('123456789', '987654321'));
console.log(multiply('123', '456'));
