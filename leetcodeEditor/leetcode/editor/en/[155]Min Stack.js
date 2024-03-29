//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. 
//
// 
// push(x) -- Push element x onto stack. 
// pop() -- Removes the element on top of the stack. 
// top() -- Get the top element. 
// getMin() -- Retrieve the minimum element in the stack. 
// 
//
// 
//
// Example: 
//
// 
//MinStack minStack = new MinStack();
//minStack.push(-2);
//minStack.push(0);
//minStack.push(-3);
//minStack.getMin();   --> Returns -3.
//minStack.pop();
//minStack.top();      --> Returns 0.
//minStack.getMin();   --> Returns -2.
// 
//
// 
// Related Topics Stack Design



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    if (this.minStack.length === 0) {
        this.minStack.push(x)
        return
    }
    if (x > this.minStack[this.minStack.length-1]) {
        // this.minStack.push(this.minStack[this.minStack.length-1])
    } else {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const curr = this.stack.pop()
    if (curr <= this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
    return curr
    // this.minStack.pop()
    // return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    console.log(this.minStack)
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
//leetcode submit region end(Prohibit modification and deletion)
