//You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. 
//
// Example 1: 
//
// 
//Input: coins = [1, 2, 5], amount = 11
//Output: 3 
//Explanation: 11 = 5 + 5 + 1 
//
// Example 2: 
//
// 
//Input: coins = [2], amount = 3
//Output: -1
// 
//
// Note: 
//You may assume that you have an infinite number of each kind of coin. 
// Related Topics Dynamic Programming



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
*/
var coinChange = function(coins, amount) {
    const opt = new Array(amount + 1);
    opt[0] = 0
    for (let i = 0; i <= amount; i++) {
        let tempArr = []
        let tempIndex = undefined
        for (let j = 0; j < coins.length; j++) {
            const min = opt[i - coins[j]]+1
            if (opt[i - coins[j]]) {
                tempArr.push(min)
                tempIndex = undefined
            }
        }
        opt[i] = Math.min(...tempArr)
    }
    return opt[amount] === Number.MAX_VALUE ? -1 : opt[amount]
};
//leetcode submit region end(Prohibit modification and deletion)
