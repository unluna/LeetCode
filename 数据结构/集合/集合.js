
//模拟Set类
class Set {
    constructor(){      //constructor用于创建和初始化class创建的对象的特殊方法(类似于构造函数)
        this.items={};  //用对象来表示集合
    }

    //has检验某个元素是否存在于集合中
    has(element){
        return element in this.items    //in操作符可以用来判断一个属性是否属于一个对象
    }
    
    //add往集合内添加元素
    add(element){
        if(!this.has(element)){//检重
            this.items[element] = element;
            return true;
        }
        return false;
    }

    //delete移除某元素
    delete(element){
        if (this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }

    //重置（清空）集合
    clear(){
        this.items = {};
    }

    //集合长度（有多少元素）
    size(){
        return Object.keys(this.items).length;
    }

    // size(){
    //     let count = 0;
    //     for(let key in this.items){     //用for/in循环遍历items的属性
    //         if(this.items.hasOwnProperty(key)){     //hasOwnProperty用于判断对象是否包含特定的自身（非继承）属性。
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    //返回一个给定对象所有属性值的数组
    values(){
        return Object.values(this.items);
    }
    
    // values(){
    //     let values = [];
    //     for(let key in this.items){
    //         if(this.items.hasOwnProperty(key)){
    //             values.push(key);
    //         }
    //     }
    //     return values;
    // }

    //并集
    union(otherSet){
        const unionSet = new Set();
        //先装入本对象的数组
        let values = this.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i])
        }
        //再装入并合并外来的数组
        values = otherSet.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    //交集
    intersection(shortSet,longSet){
        const intersectionSet = new Set();
        // const values = this.values();

        // for(let i=0;i<shortSet.length;i++){
        //     if(longSet.has(shortSet[i])){        //若存在相同元素
        //         intersectionSet.add(shortSet[i]);     //就装入intersectionSet
        //     }
        // }
        shortSet.forEach(values => {    //列出每个元素
            if(longSet.includes(values)){   //includex类似于has
                intersectionSet.add(values)
            }
        })
        
        return intersectionSet;
    }
    //交集优化版
    intersectionPlus(otherSet){
        let intersectionSet =new Set();
        const values = this.values();
        const otherValues = otherSet.values();

        if(otherValues.length - values.length>0){   //先判断长度,谁短迭代谁
            return intersectionSet = this.intersection(values,otherValues)//若本集合短
        }else{
            return intersectionSet = this.intersection(otherValues,values)//若外来集合短
        }
    }

    //差集
    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(value=>{  //化为数组并列出每个元素
            if(!otherSet.has(value)){   //若不同
                differenceSet.add(value)
            }
        })
        return differenceSet;
    }

    //子集
    isSubsetOf(otherSet){   //判断本集合是不是外来集合的子集
        if(this.size()>otherSet.size()){    //若大于则肯定不是
            return false;
        }
        let isSubset = true;
        this.values().every(value=>{    //every()方法用于检测数组所有元素是否都符合指定条件
            if(!otherSet.has(value)){   //只要有一个不同，那就不是子集
                return isSubset = false;
            }
        })
        return isSubset;
    }
}

const set = new Set(); 
 


//基本功能
//示例
const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
console.log(setA.values());
 
const setB = new Set(); 
setB.add(3); 
setB.add(4); 
setB.add(5); 
setB.add(6); 
console.log(setB.values());

const setC = new Set();
setC.add(3);
setC.add(4);
setC.add(5);
console.log(setC.values());

//并集测试
// const unionAB = setA.union(setB); 
// console.log(unionAB.values());
//交集测试
// const intersectionAB = setA.intersectionPlus(setB); 
// console.log(intersectionAB.values()); 
//差集测试
// const differenceAB = setA.difference(setB); 
// console.log(differenceAB.values()); 
//子集测试
console.log(setA.isSubsetOf(setB));
console.log(setC.isSubsetOf(setB));
