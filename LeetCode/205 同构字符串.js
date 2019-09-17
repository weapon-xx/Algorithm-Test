/**
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。
 * 两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 示例 1:
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 示例 2:
 * 输入: s = "foo", t = "bar"
 * 输出: false
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let str = '';
    const hash = {};
    for (let i = 0; i < s.length; i += 1) {
        const letter = s[i];
        if (!hash[letter] && !str.includes(t[i])) {
            hash[letter] = t[i];
        }
        str += hash[letter] || '';
    }
    return str === t;
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('paper', 'title'));
