class MyQueue{
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }
    push(val){
        this.inStack.push(val);
    }
    pop(){
        if(!this.outStack.length){
            while(this.inStack.length){
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
    peek(){
        if(!this.outStack.length){
            while(this.inStack.length){
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length-1];
    }
    empty(){
        let inStackLength = this.inStack.length;
        let outStackLength = this.outStack.length;
        return !inStackLength && !outStackLength;
    }
}

const myQueue = new MyQueue();
myQueue.push(1) // queue is: [1]
console.log(myQueue);
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue);
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop());
console.log(myQueue); // return 1, queue is [2]
console.log(myQueue.empty()); // return false