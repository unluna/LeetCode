class List {

    constructor() {
        this.dataStore = []; 
        this.listSize = 0; 
        this.postion = 0; 
    }

    length() {
        return this.listSize;
    }

    // 转换为string
    toString() {
        return this.dataStore.toString();
    }

    // 尾插
    append(element) {
        this.dataStore[this.length()] = element;
        this.listSize++;
    }

    // 头插
    appendBefore(element) {
        for (let i = this.length(); i > 0; i--) {
            this.dataStore[i] = this.dataStore[i - 1]
        }
        this.dataStore[0] = element;
        this.listSize++;
    }

    // 查
    find(element) {
        for (let i = 0; i < this.length(); ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }

    // 删
    remove(element) {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return;
        }
        return false;
    };

    // 在现有元素后插入新元素
    insert(currentElement, newElement) {
        const pos = this.find(currentElement);
        if (pos > -1) {
            this.dataStore.splice(pos + 1, 0, newElement);
            this.listSize++;
            return true;
        }
        return false;
    }

    // 在现有元素前插入新元素
    insertBefore(currentElement, newElement) {
        const pos = this.find(currentElement);
        if (pos > -1) {
            this.dataStore.splice(pos, 0, newElement);
            this.listSize++;
            return true;
        }
        return false;
    }

    // 从列表的当前位置移动到第一个元素
    front() {
        this.postion = 0;
    };

    // 从列表的当前位置移动到最后一个位置
    end() {
        this.postion = this.length() - 1;
    };

    // 后移一位
    next() {
        if (this.postion !== this.length() - 1) {
            this.postion++;
        }
    }

    // 前移一位
    prev() {
        if (this.postion !== 0) {
            this.postion--;
        }
    }

    // 返回列表当前位置
    currPos() {
        return this.postion;
    }

    // 将当前位置移动到指定位置
    moveTo(index) {
        if (index >= 0 && index <= this.length) {
            this.postion = index;
            return true;
        }
        return false;
    }

    // 清空
    clear() {
        this.dataStore = [];
        this.listSize = 0;
        this.postion = 0;
    }
    // 显示值
    getElement(index) {
        return this.dataStore[index];
    }

    // 判断
    contains(element) {
        for (let i = 0; i < this.length(); i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    }
}


const arr = new List();
arr.append("1");
arr.appendBefore("0");
arr.remove("1");
console.log(arr.dataStore);