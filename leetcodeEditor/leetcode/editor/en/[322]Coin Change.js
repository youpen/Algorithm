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
    if (!coinChange.memo) coinChange.memo = {}
    if (coinChange.memo[amount]) return coinChange.memo[amount]
    if (amount === 0) return 0
    let ans = Infinity
    for (let i = 0; i < coins.length; i++) {
        const currCoin = coins[i]
        if (amount - currCoin >= 0) {
            const res = coinChange(coins, amount - currCoin)
            if (res === -1) continue
            ans = Math.min(ans, res+1)
            coinChange.memo[amount] = ans
        }
    }
    console.log(ans)
    return ans === Infinity ? -1 : ans
};
//leetcode submit region end(Prohibit modification and deletion)
