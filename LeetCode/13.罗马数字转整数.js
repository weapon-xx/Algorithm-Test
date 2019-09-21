/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const hash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    for (let i = 0; i < s.length; i += 1) {
        const letter = s[i];
        const next = s[i + 1];
        if ((letter === 'I' && ['V', 'X'].includes(next))
            || (letter === 'X' && ['L', 'C'].includes(next))
            || (letter === 'C' && ['D', 'M'].includes(next))
        ) {
            total += hash[next] - hash[letter];
            i += 1;
            continue;
        }
        total += hash[letter];
    }
    return total;
}

console.log(romanToInt('MCMXCIV'));
