// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.



class MinStack {
    constructor(){
        this.stack = new Array(-3,-1,0,-2,0);
    }

    push(val) {
        this.stack.push(val)
        return this.stack
    }

    pop() {
        this.stack.pop()
    }

    top() {
        return this.stack[(this.stack.length -1)]
    }
    getMin() {
        let min = this.stack[0]
        for(let i = 0; i < this.stack.length; i++){
            // console.log(min)
            if(min >= this.stack[i]){
                min = this.stack[i]
            }
        }
        return min
    }
}

const stack = new MinStack()
console.log(stack.getMin())