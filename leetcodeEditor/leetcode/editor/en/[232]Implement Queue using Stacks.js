//Implement the following operations of a queue using stacks. 
//
// 
// push(x) -- Push element x to the back of queue. 
// pop() -- Removes the element from in front of queue. 
// peek() -- Get the front element. 
// empty() -- Return whether the queue is empty. 
// 
//
// Example: 
//
// 
//MyQueue queue = new MyQueue();
//
//queue.push(1);
//queue.push(2);  
//queue.peek();  // returns 1
//queue.pop();   // returns 1
//queue.empty(); // returns false 
//
// Notes: 
//
// 
// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid. 
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack. 
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue). 
// 
// Related Topics Stack Design



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const temp = this.s2.pop();
    if (temp) {
        return temp
    } else {
        while (true) {
            const curr = this.s1.pop();
            if (!curr) break
            this.s2.push(curr)
        }
        return this.s2.pop()
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2[this.s2.length-1]) {
        return this.s2[this.s2.length-1]
    }
    while (true) {
        const curr = this.s1.pop();
        if (!curr) break
        this.s2.push(curr)
    }
    return this.s2[this.s2.length-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length===0 && this.s2.length===0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
//leetcode submit region end(Prohibit modification and deletion)
