/**
 * 难度：medium
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 示例:
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 说明:
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n2) 。
 * 进阶: 你能将算法的时间复杂度降低到 O(NlogN) 吗?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    // 思路：动态规划
    if (nums.length === 0) return 0;

    // 因为需要求出最长的上升子序，那么数组每一项也算作一个子序
    // 初始化结果数组，第一位就长度默认为 1
    const dp = [1];

    // 求出转换状态方程，假设当前数值大于前一个数值，那么他们倆就是一个上升子序
    // 但是需要求出最长子序长度，所以要逐个对比之前数值，分别求出对应的长度，再选出最长的长度
    // dp[i] = Math.max(dp[i - 1] + 1, dp[i - 2] + 1 ... dp[0] + 1)
    for (let i = 1; i < nums.length; i += 1) {
        const arr = [];
        const curr = nums[i];
        for (let j = 0; j < i; j += 1) {
            if (curr > nums[j]) {
                arr.push(dp[j] + 1);
            }
        }
        // 假设当前数值小于之前所有值，那么它的长度为 1
        dp[i] = arr.length !== 0 ? Math.max(...arr) : 1;
    }

    // 总结：因为需要遍历数组，在循环体内部再遍历一次，所以时间复杂度为 O(n2)
    // 空间复杂度为 O(n)
    return Math.max(...dp);
}

// 来进一步优化时间复杂度
function lengthOfLIS1(nums) {
    // 思路：贪心算法 + 二分查找法
    // 算法主体思路：前面的数值越小，那么后面接上随机数构成上升序列的几率会越大
    if (nums.length === 0) return 0;

    // 初始化一个升序的数组，第一项和原数组保持一致
    const arr = [nums[0]];

    for (let i = 1; i < nums.length; i += 1) {
        const end = arr.length - 1;
        if (nums[i] > arr[end]) {
            // 假设当前数值大于 arr 末尾数值，则将其 push 进去
            arr.push(nums[i]);
        } else {
            // 假设小于的话，就需要找到数组中「第一个」比当前数值大的下标，然后将它替换为当前值，
            // 注意：直接替换后构成的序列可能不是原数组中的「子序列」，但是替换后并没有改变之前最长序列的长度范围
            // 这里使用的是「二分法」来优化时间复杂度
            let left = 0;
            let right = end;
            while (left < right) {
                const mid = left + parseInt((right - left) / 2, 10);
                if (arr[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            // 找到后替换
            arr[left] = nums[i];
        }
    }

    // 遍历完成后，arr 就是一个升序序列，但是它有可能不是「子」序列，但是它的长度也就是最大的升序子序列长度
    // 总结：遍历数组 O(N)，二分查找 O(logN)，所以算法整体时间复杂度为 O(NlogN)
    // 空间复杂度 O(N)
    console.log(arr);
    return arr.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS1([3, 5, 6, 2, 7]));
