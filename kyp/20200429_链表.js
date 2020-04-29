class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.head = undefined;
        this.snail = undefined;
    }

    /*
    * 添加节点
    * */
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            // catches null && undefined
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

//查找
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.size() && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count
    }

    getHead() {
        return this.head;
    }

    clear() {
        this.head = undefined;
        this.count = 0;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

const myList = new LinkedList();
myList.push(1);
myList.push(33);
myList.push(9);
myList.push(10);
myList.push(22);


//148-排序链表
//https://leetcode-cn.com/problems/sort-list/
const sortList = function (head) {
    const dummy = new Node();
    dummy.next = head;

    let slow = dummy, quick = dummy;
    while (quick.next) {
        quick = quick.next;
        slow = slow.next;
        quick.next && (quick = quick.next)
    }
    // if the slow list is equal to the quick list, it means the current list only has one node.
    if (slow === quick) return dummy.next;
    let rightList = slow.next;
    slow.next = null;
    return merge(sortList(dummy.next), sortList(rightList))
};

const merge = function (leftList, rightList) {
    const dummy = new Node();
    //dummy-> 13 24
    dummy.next = leftList;
    let lNode = dummy;
    let rNode = rightList;

    while (lNode && rNode) {
        while (lNode.next && lNode.next.element < rNode.element) {
            lNode = lNode.next;
        }
        let rNext = rNode.next;
        rNode.next = lNode.next;
        lNode.next = rNode;
        rNode = rNext
    }
    return dummy.next
};
console.log(sortList(myList.head));
console.log(myList.toString());