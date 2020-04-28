class Queue {
    constructor() {
        this.dataStore = {};
        this.lowestNumber = 0; // 指向队首的序号
        this.count = 0;
    }

    // 入队（队尾增加一个）
    enqueue(element) {
        this.dataStore[this.count++] = element;
    }

    // 出队（队首删除一个）
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.dataStore[this.lowestNumber];
        delete this.dataStore[this.lowestNumber++];
        return item;
    }

    // 查看队头元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.dataStore[this.lowestNumber]
    }

    // 查看队尾元素
    rear() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.dataStore[this.count-1]
    }

    size() {
        return this.count - this.lowestNumber;
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.dataStore = {};
        this.lowestNumber = 0;
        this.count = 0;
    }
}

const queue = new Queue();



