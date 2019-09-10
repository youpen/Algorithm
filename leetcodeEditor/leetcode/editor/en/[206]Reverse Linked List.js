//Reverse a singly linked list. 
//
// Example: 
//
// 
//Input: 1->2->3->4->5->NULL
//Output: 5->4->3->2->1->NULL
// 
//
// Follow up: 
//
// A linked list can be reversed either iteratively or recursively. Could you implement both? 
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
// 细节思路， 由于定义了first, middle, third, 所以目前三个的指向关系是已知的
// 也就是说可以先改next指向， 再去改这三个属性的值
var reverseList = function(head) {
    if (!head) return null;
    let [P, C] = [null, head];
    while (C !==null) {
        [P, C, C.next] = [C, C.next, P]
    }
    return C
};
//leetcode submit region end(Prohibit modification and deletion)
