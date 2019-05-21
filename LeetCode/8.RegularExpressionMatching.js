/**
 * Implement regular expression matching with support for '.' and '*'.
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    if (s == null || p == null) {
        return false;
    }

    const dp = [];

    for (let i = 0; i < s.length + 1; i += 1) {
        const arr = [];
        for (let j = 0; j < s.length; j += 1) {
            arr.push(false);
        }
        dp.push(arr);
    }

    dp[0][0] = true;

    for (let i = 0; i < p.length; i += 1) {
        if (p.charAt(i) === '*' && dp[0][i - 1]) {
            dp[0][i + 1] = true;
        }
    }

    for (let i = 0; i < s.length; i += 1) {
        for (let j = 0; j < p.length; j += 1) {
            if (p.charAt(j) === '.') {
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p.charAt(j) === s.charAt(i)) {
                dp[i + 1][j + 1] = dp[i][j];
            }

            if (p.charAt(j) === '*') {
                if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                } else {
                    dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
                }
            }
        }
    }

    return dp[s.length][p.length];
}

console.log(isMatch('aaa', 'a*'));
