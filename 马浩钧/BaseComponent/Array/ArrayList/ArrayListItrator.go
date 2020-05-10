package ArrayList

import "errors"

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  02/05/2020 21:49
   @since Go1.13.5
   @abstract 数组迭代器
*/

//抽象迭代器接口
type Iterator interface {
	HasNext() bool
	Next()	(interface{},error)
	Remove()
	GetIndex() int
}

//抽象聚合接口

type Iterable interface {
	Iterator() Iterator		//构造初始化接口
}

type ArrayListItrator struct {
	list *ArrayList		//迭代对象
	currentIndex int 	//当前索引
}


func (list *ArrayList) Iterator() Iterator  {
	it := new(ArrayListItrator)
	it.currentIndex = 0
	it.list = list
	return it
}

func (it *ArrayListItrator) HasNext() bool {
	return it.currentIndex < it.list.ArraySize
}

func (it *ArrayListItrator) Remove()  {
	it.currentIndex --
	_ = it.list.Delete(it.currentIndex)
}

func (it *ArrayListItrator) GetIndex() int {
	return it.currentIndex
}

func (it *ArrayListItrator) Next () (interface{},error)  {
	if !it.HasNext() {
		return nil,errors.New("没有下一个")
	}

	value, err := it.list.Get(it.currentIndex)
	it.currentIndex++
	return value,err
}




