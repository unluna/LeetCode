/**
 * @fileoverview 描述列表基本结构,
 * @author clarencekong<clarencekong@163.com>
 * Copyright 2020. All Rights Reserved.
 */
var MyList = /** @class */ (function () {
    function MyList() {
        this.listSize = 0;
        this.position = 0;
        this.dataStore = new Array();
    }
    MyList.prototype.length = function () {
        return this.listSize;
    };
    MyList.prototype.toString = function () {
        return this.dataStore.toString();
    };
    //尾加
    MyList.prototype.append = function (element) {
        this.dataStore[this.length()] = element;
        this.listSize++;
    };
    MyList.prototype.appendBefore = function (element) {
        for (var i = this.length(); i > 0; i--) {
            this.dataStore[i] = this.dataStore[i - 1];
        }
        this.dataStore[0] = element;
        this.listSize++;
    };
    MyList.prototype.find = function (element) {
        for (var i = 0; i < this.length(); ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    };
    MyList.prototype.remove = function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return;
        }
        return false;
    };
    MyList.prototype.insert = function (currentElement, newElement) {
        var pos = this.find(currentElement);
        if (pos > -1) {
            this.dataStore.splice(pos, 0, newElement);
            this.listSize++;
            return;
        }
        return false;
    };
    MyList.prototype.clear = function () {
        this.dataStore = [];
        this.listSize = 0;
        this.position = 0;
    };
    MyList.prototype.contain = function (element) {
        for (var i = 0; i < this.length(); i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    };
    MyList.prototype.currPos = function () {
        return this.position;
    };
    MyList.prototype.getElement = function (index) {
        return this.dataStore[index];
    };
    MyList.prototype.insertBefore = function (currentElement, newElement) {
        var pos = this.find(currentElement);
        if (pos > -1) {
            this.dataStore.splice(pos, 0, newElement);
            this.listSize++;
            return true;
        }
        return false;
    };
    MyList.prototype.print = function () {
        for (var _i = 0, _a = this.dataStore; _i < _a.length; _i++) {
            var element = _a[_i];
            console.log(element);
        }
    };
    return MyList;
}());
var arr = new MyList();
arr.append("1");
arr.appendBefore("0");
arr.remove("1");
arr.print();
