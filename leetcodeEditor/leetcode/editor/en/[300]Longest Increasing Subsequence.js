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
    const opt = []
    opt[0] = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] > nums[i]) {
            let end = opt[i-1][opt[i-1].length-1].push(nums[n])
            end.push(nums[i])
            opt[i] = [...opt[i-1], end ]
        } else {
            opt[i].push([nums[i]])
        }
    }
    return opt[opt.length-1].length
};
//leetcode submit region end(Prohibit modification and deletion)
