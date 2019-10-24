//Given an unsorted array of integers, find the length of longest increasing subsequence. 
//
// Example: 
//
// 
//Input: [10,9,2,5,3,7,101,18]
//Output: 4 
//Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
//
// Note: 
//
// 
// There may be more than one LIS combination, it is only necessary for you to return the length. 
// Your algorithm should run in O(n2) complexity. 
// 
//
// Follow up: Could you improve it to O(n log n) time complexity? 
// Related Topics Binary Search Dynamic Programming



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return 1
    // 初始化数组全为1
    const opt = []
    for (let i = 0; i < nums.length; i++) {
        opt.push(1)
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                opt[i] = Math.max(opt[i], opt[j] + 1)
            }
        }
    }
    return Math.max(...opt)
};
//leetcode submit region end(Prohibit modification and deletion)
