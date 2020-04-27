class List {

    constructor() {
        this.dataStore = []; //初始化一个空数组用来保存列表元素
        this.listSize = 0; // 列表的长度
        this.postion = 0; //列表当前位置
    }

    // 列表包含元素的个数
    length() {
        return this.listSize;
    }

    // 表示指定的数组及其元素的字符串 [1,"a"]=>"1,a"
    toString() {
        return this.dataStore.toString();
    }

    // 在列表元素末尾增加新元素
    append(element) {
        this.dataStore[this.length()] = element;
        this.listSize++;
    }

    // 在列表元素首部增加新元素
    appendBefore(element) {
        // length:3
        // this.dataStore[3] 012
        for (let i = this.length(); i > 0; i--) {
            this.dataStore[i] = this.dataStore[i - 1]
        }
        this.dataStore[0] = element;
        this.listSize++;
    }
// [1,2,3] => [0,1,2,3]
    // 查找元素
    find(element) {
        for (let i = 0; i < this.length(); ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }

    // 从列表中删除元素
    remove(element) {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return;
        }
        return false;
    };
    // [1,2,3] => [1,0,2,3]
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

    //从列表的当前位置移动到第一个元素
    front() {
        this.postion = 0;
    };

    //从列表的当前位置移动到最后一个位置
    end() {
        this.postion = this.length() - 1;
    };

    //将当前位置后移一位
    next() {
        if (this.postion !== this.length() - 1) {
            this.postion++;
        }
    }

    //将当前位置前移一位
    prev() {
        if (this.postion !== 0) {
            this.postion--;
        }
    }

    //返回列表当前位置
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

    //清空列表中的所有元素
    clear() {
        this.dataStore = [];
        this.listSize = 0;
        this.postion = 0;
    }
// const arr=[1,2,3]; arr[1] => 2
    // 显示当前的元素
    getElement(index) {
        return this.dataStore[index];
    }

    //是否包含该元素
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
// console.log(typeof []);
