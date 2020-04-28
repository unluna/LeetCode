// {1:"A"}
// {1:"A",2:"B"}

class Queue {
    constructor() {
        this.dataStore = {};
        this.lowestNumber = 0; // 指向队首的序号
        this.count = 0; // 指向队尾的序号
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
        return this.dataStore[this.count - 1]
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
queue.enqueue("🍊");
queue.enqueue("🍎");
queue.enqueue("🍌");
queue.dequeue();
queue.enqueue("🍌");
// console.log(queue);


// 击鼓传花


// 循环队列

/**
 * @params(Array[string])
 * @params(ANumber)
 * @return Object
 */

const hotPotato = (peoples, times) => {
    const queue = new Queue();
    const loserArr = [];
    for (let i = 0; i < peoples.length; i++) {
        queue.enqueue(peoples[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < times; i++) {
            queue.enqueue(queue.dequeue());
        }
        loserArr.push(queue.dequeue())
    }

    // return queue.dequeue();
    return {
        loserArr,
        winner: queue.dequeue()
    }
};
// 5个小孩 1面鼓   10
const people = ["🍊", "🍎", "🍌", "🍓", "🍍"];

console.log(hotPotato(people, 10));
