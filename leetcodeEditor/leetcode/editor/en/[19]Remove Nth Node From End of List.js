//Given a linked list, remove the n-th node from the end of list and return its head. 
//
// Example: 
//
// 
//Given linked list: 1->2->3->4->5, and n = 2.
//
//After removing the second node from the end, the linked list becomes 1->2->3->5.
// 
//
// Note: 
//
// Given n will always be valid. 
//
// Follow up: 
//
// Could you do this in one pass? 
// Related Topics Linked List Two Pointers



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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // if (!head || !head.next) return null;
    // if (n===1 && !head.next.next) { head.next = null; return head }
    // let record = []
    // let curr = head;
    // while (curr !== null) {
    //     record.push(curr)
    //     if (record.length > n+1) {
    //         record.shift()
    //     }
    //     curr = curr.next
    // }
    // if (record.length === n) return head.next
    // record[0].next = record[2]
    // return head;

    if (!head || !head.next) { return null }
    // if (n===1 && !head.next.next) { head.next = null; return head }
    // if (n===2 && !head.next.next) { return head.next }
    let fast = head;
    let slow = head;
    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }
    if (!fast) {
        return head.next
    }
    while (fast !== null && fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
//leetcode submit region end(Prohibit modification and deletion)
