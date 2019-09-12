//Implement the following operations of a stack using queues. 
//
// 
// push(x) -- Push element x onto stack. 
// pop() -- Removes the element on top of the stack. 
// top() -- Get the top element. 
// empty() -- Return whether the stack is empty. 
// 
//
// Example: 
//
// 
//MyStack stack = new MyStack();
//
//stack.push(1);
//stack.push(2);  
//stack.top();   // returns 2
//stack.pop();   // returns 2
//stack.empty(); // returns false 
//
// Notes: 
//
// 
// You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid. 
// Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue. 
// You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack). 
// 
// Related Topics Stack Design



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.s1=[];
    this.s2=[];
    this.top = null
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.s1.push(x)
    this.top = x
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.s1.length > 1) {
        const curr = this.s1.shift()
        this.top = curr
        this.s2.push(curr)
    }

    const temp = this.s2
    const top = this.s1.shift()
    this.s2 = this.s1
    this.s1 = temp;
    return top
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.top
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.s1.length===0 && this.s2.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
//leetcode submit region end(Prohibit modification and deletion)
