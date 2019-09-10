//Given a linked list, swap every two adjacent nodes and return its head. 
//
// You may not modify the values in the list's nodes, only nodes itself may be changed. 
//
// 
//
// Example: 
//
// 
//Given 1->2->3->4, you should return the list as 2->1->4->3.
// 
// Related Topics Linked List



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 注意点 空指针的问题

var swapPairs = function(head) {
    if (!head || !head.next) return head;
    var ans = head.next;
    var curr = head.next;
    var prev = head
    while (curr !== null) {
        var next = curr.next;
        curr.next = prev;

        if (next && next.next) {
            prev.next = next.next
        } else {
            prev.next = next
        }
        if (!next || !next.next) break
        curr = next.next
        prev = next;
    }
    return ans
};
//leetcode submit region end(Prohibit modification and deletion)
