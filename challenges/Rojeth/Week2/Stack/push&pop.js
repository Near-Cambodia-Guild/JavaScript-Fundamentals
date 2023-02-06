const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE ) {
        }
        this.items.push(item);
        
    }
    pop() {
        if (this.items.length === 0) {
        }
        return this.items.pop();
    }
    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false
        
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
