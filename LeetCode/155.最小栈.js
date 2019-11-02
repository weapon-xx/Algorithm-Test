/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 */
/**
 * initialize your data structure here.
 */
function MinStack() {
    this.callback = [];
}
/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function push(x) {
    this.callback.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function pop() {
    this.callback.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function top() {
    return this.callback[this.callback.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function getMin() {
    return Math.min(...this.callback);
};

const stack = new MinStack();
stack.push(2);
