class List{
    //初始化
    constructor(){
        this.dataStore=[];
        this.listSize=0;
        this.positin=0;
    }

    //列表的元素个数
    length(){
        return this.listSize;
    }

    //返回以一个字符串表示的 Number 对象值
    toString(){
        return this.dataStore.toString();
    }

    //在列表的尾部增加新元素
    append(element){
        this.dataStore[this.listSize]=element;
        this.listSize++;
    }

    //在列表的首部增加新元素
    appendBefore(element){
        this.dataStore.splice(0,0,element);
        this.listSize++;
    }

    //查找元素
    find(element){
        for(var i=0;i<this.listSize;i++){
            if(this.dataStore[i]==element){
                return i;
            }
        }
        return -1;
    }

    //删除元素
    remove(){
        const foundIn=this.find;
        if (foundIn>-1){
            this.dataStore.splice(foundIn,1);
            this.listSize--;
            return ;
        }
        return false;
    }

    //指针最前，最后，后移一位，前移一位
    front(){
        this.positin=0;
    }

    end(){
        this.positin=this.positin-1;
    }

    next(){//将当前位置后移一位
        if(this.positin!=this.listSize-1){
            this.positin++;
        }
    }

    prev(){//将当前位置前移一位
        if(this.positin!=0){
            this.positin--;
        }
    }

    //返回列表当前位置
    currPos(){
        return this.positin;
    }

    // 将当前位置移动到指定位置
    moveTo(index){
        if(index>0 && index<this.length){
            this.positin=index;
            return true;
        }
        else
            return false;
    }
   
    //在现有元素前面插入新的元素
    insertBefore(currentElement,newElement){
        const pos=this.find(currentElement);
        if(pos > -1){
            this.dataStore.splice(pos,0,newElement);
            this.listSize++;
            return true;
        }
        return false;
    }

    //在现有元素后面插入新的元素
    insertBefore(currentElement,newElement){
        const pos=this.find(currentElement);
        if(pos > -1){
            this.dataStore.splice(pos+1,0,newElement);
            this.listSize++;
            return true;
        }
        return false;
    }

    //返回列表当前位置
    getElement(index){
        return this.dataStore(index);
    }

    //清空列表中的所有元素
    clear(){
        this.dataStore=[];
        this.listSize=0;
        this.positin=0;
    }
    
    //查看元素存在
    contains(element){
        for (let i=0;i<this.length();i++){
            if(this.dataStore[i]===element){
                return true;
            }
        }
        return false;
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

    const arr=new List();
    arr.append("1");
    arr.appendBefore("0");
    arr.remove("1");
    console.log(arr.dataStore);