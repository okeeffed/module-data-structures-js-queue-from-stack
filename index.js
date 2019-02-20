// first, update queue
class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this
            .data
            .unshift(record);
    }

    remove() {
        return this
            .data
            .pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this
            .data
            .push(record);
    }

    pop() {
        return this
            .data
            .pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

// using weave
const queueFromStack = (srcOne, srcTwo) => {
    const sOne = new Stack();
    while (srcOne.length) {
        sOne.push(srcOne.pop());
    }

    const sTwo = new Stack();
    while (srcTwo.length) {
        sTwo.push(srcTwo.pop());
    }

    const res = converstion(sOne, sTwo);
    return res;
}

const converstion = (sOne, sTwo) => {
    const q = new Queue();

    while (sOne.peek() || sTwo.peek()) {
        if (sOne.peek()) {
            q.add(sOne.pop());
        }

        if (sTwo.peek()) {
            q.add(sTwo.pop());
        }
    }

    return q;
}

module.exports = queueFromStack;