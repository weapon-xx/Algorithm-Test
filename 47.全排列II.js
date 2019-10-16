/**
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 示例:
 * 输入: [1,1,2]
 * 输出:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
    const res = [];
    const map = {};

    function back(all, arr, index = 0) {
        if (index === arr.length) {
            const key = arr.toString();
            if (!map[key]) {
                all.push(arr);
                map[key] = true;         
            }
            return
        }
        for (let i = index; i < arr.length; i += 1) {
            const temp = arr.slice();
            [temp[index], temp[i]] = [temp[i], temp[index]];
            back(all, temp, index + 1);
            [temp[index], temp[i]] = [temp[i], temp[index]];   
        }
    }

    back(res, nums);
    return res;
}

console.log(permuteUnique([1,1,2]));
