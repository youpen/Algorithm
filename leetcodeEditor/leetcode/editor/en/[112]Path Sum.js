//Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum. 
//
// Note: A leaf is a node with no children. 
//
// Example: 
//
// Given the below binary tree and sum = 22, 
//
// 
//      5
//     / \
//    4   8
//   /   / \
//  11  13  4
// /  \      \
//7    2      1
// 
//
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22. 
// Related Topics Tree Depth-first Search



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let nodeRecorder = []
    let ans = false
    function dfs(crt) {
        if (!crt) return
        nodeRecorder.push(crt.val)
        if (!crt.left && !crt.right) {
            let crtSum = 0
            for (let i = 0; i < nodeRecorder.length; i++) {
                crtSum += nodeRecorder[i]
            }
            if (crtSum === sum) {
                ans = true
            }
        }
        dfs(crt.left)
        dfs(crt.right)
        nodeRecorder.pop();
    }
    dfs(root,0)
    return ans
};

// // recursive dfs
// var hasPathSum = function(root, sum) {
//     if (!root) return false
//     function dfs(crt, target) {
//         if (!crt) return false
//         if (!crt.left && !crt.right &&　target === crt.val) {
//             return true;
//         }
//         return dfs(crt.left, target - crt.val) || dfs(crt.right, target - crt.val)
//     }
//     return dfs(root, sum)
// };

// iterative bfs
// var hasPathSum = function(root, sum) {
//     if (!root) return false
//     let queue = [[root, sum]]
//     console.log(root)
//     while (queue.length > 0) {
//         const [crt, target] = queue.shift();
//         if (!crt.left && !crt.right && target === crt.val) {
//             return true
//         }
//         crt.right && queue.push([crt.right, target - crt.val])
//         crt.left && queue.push([crt.left, target - crt.val])
//     }
//     return false
// };

// // iterative dfs
// var hasPathSum = function(root, sum) {
//     if (!root) return false;
//     let stack = [[root, sum]];
//
//     while (stack.length > 0) {
//         const [crt, target] = stack.pop();
//         if (!crt.left && !crt.right && target === crt.val) {
//             return true;
//         }
//         crt.left && stack.push([crt.left, target - crt.val])
//         crt.right && stack.push([crt.right, target - crt.val])
//     }
//     return false
// }
//leetcode submit region end(Prohibit modification and deletion)
