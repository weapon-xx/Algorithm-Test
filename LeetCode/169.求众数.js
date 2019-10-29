/**
 * 给定一个大小为 n 的数组，找到其中的众数
 * 众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 示例 1:
 * 输入: [3,2,3]
 * 输出: 3
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    const map = nums.reduce((all, item) => {
        all[item] = all[item] ? all[item] + 1 : 1;
        return all;
    }, {});
    let max = 0;
    let res;

    Object.keys(map).forEach((key) => {
        const times = map[key];
        if (times > max) {
            max = times;
            res = key;
        }
    });
    return res;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
