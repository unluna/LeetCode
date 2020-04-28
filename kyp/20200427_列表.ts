/**
 * @fileoverview 描述列表基本结构,
 * @author clarencekong<clarencekong@163.com>
 * Copyright 2020. All Rights Reserved.
 */


interface List<E> {
    length(): number;

    toString(): string;

    append(E): void;

    appendBefore(E): void;

    find(E): number;

    remove(T): boolean;

    insert(T, any): boolean;

    insertBefore(T, any): boolean;

    currPos(): number;

    clear(): void;

    contain(T): boolean;

    getElement(number): E;

    print(): void;

}

class MyList<T> implements List<T> {
    private dataStore: Array<T>;
    private listSize: number = 0;
    private position = 0;

    constructor() {
        this.dataStore = new Array<T>()
    }

    length(): number {
        return this.listSize;
    }

    toString(): string {
        return this.dataStore.toString()
    }

    //尾加
    append(element: T): void {
        this.dataStore[this.length()] = element;
        this.listSize++;
    }

    appendBefore(element: T): void {
        for (let i = this.length(); i > 0; i--) {
            this.dataStore[i] = this.dataStore[i - 1];
        }
        this.dataStore[0] = element;
        this.listSize++;
    }

    find(element: T): number {
        for (let i = 0; i < this.length(); ++i) {
            if (this.dataStore[i] === element) {
                return i
            }
        }
        return -1;
    }

    remove(element): boolean {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return;
        }
        return false;
    }

    insert(currentElement, newElement): boolean {
        const pos = this.find(currentElement);
        if (pos > -1) {
            this.dataStore.splice(pos, 0, newElement);
            this.listSize++;
            return;
        }
        return false;
    }

    clear(): void {
        this.dataStore = [];
        this.listSize = 0;
        this.position = 0;
    }

    contain(element): boolean {
        for (let i = 0; i < this.length(); i++) {
            if (this.dataStore[i] === element) {
                return true;
            }

        }
        return false;
    }

    currPos(): number {
        return this.position;
    }

    getElement(index): T {
        return this.dataStore[index];
    }

    insertBefore(currentElement, newElement): boolean {
        const pos = this.find(currentElement);
        if (pos > -1) {
            this.dataStore.splice(pos, 0, newElement);
            this.listSize++;
            return true;
        }
        return false;
    }

    print(): void {
        for (let element of this.dataStore) {
            console.log(element);
        }
    }

}

const arr = new MyList();
arr.append("1");
arr.appendBefore("0");
// arr.remove("1");
arr.print();