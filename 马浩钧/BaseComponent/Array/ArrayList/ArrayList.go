package ArrayList

import (
	"errors"
	"fmt"
)

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  01/05/2020 20:03
   @since Go1.13.5
   @abstract Implement ArrayList with list
*/

/*
	ArrayList method
	Size()	A public method which return the size of the list
	Get()	A publice method to get all the elements at current list
	Set()	A public method to modify a value in specific index
	Insert()	A public method to insert a value into a specific index
	Append()	A public method to append a new value in the back of the list
	Clear()		A public method to clear all the elements
	Delete()	A public method to delete a value in specific index
	String()	A public method to return a arrayList with String type
	checkIsFull()	A private method to check out the arraylist is full or not

*/


type List interface {
	Size() int //长度
	Get(index int) (interface{},error) //获取
	Set(index int, newVal interface{}) error //修改
	Insert(index int,newVal interface{}) error //插入
	Append(newVal interface{})//增加
	Clear() //清空
	Delete(index int) error //删除
	String() string //返回字符串
	checkIsFull() //检测内存
	Iterator() Iterator
}

type ArrayList struct {
	DataStore[] interface{}
	ArraySize int
}

func NewArrayList() *ArrayList {
	list := new(ArrayList)
	list.DataStore = make([]interface{},0,10)
	list.ArraySize = 0
	return list
}

func (list *ArrayList) Size() int {
	return list.ArraySize
}

func (list *ArrayList) Get(index int) (interface{}, error) {
	if index < 0 || index >= list.ArraySize {
		return nil,errors.New("索引越界")
	}
	return list.DataStore[index],nil
}

func (list *ArrayList) Append(newVal interface{}) {
	list.DataStore = append(list.DataStore,newVal)
	list.ArraySize++
}

func (list *ArrayList) String() string {
	return fmt.Sprint(list.DataStore)
}

func (list *ArrayList) Set(index int, newVal interface{}) error{
	if index < 0 || index >= list.ArraySize {
		return errors.New("索引越界")
	}
	list.DataStore[index] = newVal
	return nil
}

func  (list *ArrayList) checkIsFull()  {
	if list.ArraySize == cap(list.DataStore) {
		newDataStore := make([]interface{},2*list.ArraySize,2*list.ArraySize)//len == cap or elements will be initialized to type of nil
		copy(newDataStore,list.DataStore)
		list.DataStore = newDataStore
	}
}

func (list *ArrayList) Insert(index int,newVal interface{}) error  {
	if index < 0 || index >= list.ArraySize {
		return errors.New("索引越界")
	}
	list.checkIsFull()
	list.DataStore = list.DataStore[:list.ArraySize+1]//内存 +1
	for i := list.ArraySize; i > index; i-- {
		list.DataStore[i] = list.DataStore[i - 1]
	}
	list.DataStore[index] = newVal
	list.ArraySize ++
	return nil

}

func (list *ArrayList) Clear()  {
	list.DataStore = make([]interface{},0,10)
	list.ArraySize = 0
}

func (list *ArrayList) Delete(index int) error  {
	list.DataStore = append(list.DataStore[:index],list.DataStore[index + 1:]...)
	list.ArraySize--
	return nil
}