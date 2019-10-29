/**
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和
 * 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
 * 如果可以变为 1，那么这个数就是快乐数。
 * 输入: 19
 * 输出: true
 * 解释:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 * 使用快慢指针解决来判断循环情况，使用字典来处理重复循环
 */
function isHappy(n) {
    function squareSum(num) {
        let res = 0;
        while (num > 0) {
            res += (num % 10) ** 2;
            num = parseInt(num / 10, 10);
        }
        return res;
    }

    const map = {};
    let slow = n;
    let fast = squareSum(n);
    map[slow] = true;
    while (slow !== fast) {
        slow = squareSum(slow);
        fast = squareSum(fast);
        fast = squareSum(fast);
        // 解决循环问题
        if (map[slow]) {
            console.log(slow);
            return false;
        }
        map[slow] = true;
    }
    return slow === 1;
}

console.log(isHappy(19));
