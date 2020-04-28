/**
 * @fileoverview 描述列表基本结构,
 * @author clarencekong<clarencekong@163.com>
 * Copyright 2020. All Rights Reserved.
 */
class list {
    constructor() {
        this.dataStore = [];
        this.listSize = 0;
        this.position = 0;
    }
    length(){
        return this.listSize;
    }
    //这玩意干啥

    toString(){
        return this.dataStore.toString()
    }
    //尾加
    append (e){
        this.dataStore[this.length()]=e;
        this.listSize++;
    }

}