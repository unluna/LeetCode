const obj = {};
obj[1] = "";
obj["123"] = "🍌";
// key => value
class Stack {

    constructor() {
        this.dataStore = {};// 保存栈内元素
        this.length = 0;     // 栈内元素的个数，栈内压入元素=>该变量变大，弹出元素=>变量减小
    }

    // 入栈操作  注意 this.top++ 是后加
    push(element) {
        this.dataStore[this.length++] = element;
        // this.dataStore[this.length]=element;
        // this.length++;
    }

    // 出栈操作
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.dataStore[--this.length];
        // this.length--;
        // const item=this.dataStore[this.length];
        delete this.dataStore[this.length];
        return item;
    }

    // 返回栈顶的元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.dataStore[this.length - 1];
    }


    isEmpty() {
        return this.length === 0
    }

    // 清空一个栈
    clear() {
        // this.length = 0;
        // this.dataStore = [];

        while (!this.isEmpty()) {
            this.pop();
        }
    }
}

// const stack = new Stack();
// stack.push("🍌");
// stack.push("");
// stack.push("🍊");
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);
const isPalindrome = word => {
    const stack = new Stack();

    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }
    let str = "";
    while (stack.length() > 0) {
        str += stack.pop()
    }
    return str === word;
};
const str = "racecar";

console.log(isPalindrome(str));

