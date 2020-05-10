package Stack

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  02/05/2020 22:59
   @since Go1.13.5
*/

type StackArray interface {
	Pop() interface{}	//压入
	Push(value interface{})	//弹出
	isFull() bool
	isEmpty()bool
	Clear()
	Size() int
}

type Stack struct {
	dataSource[] interface{}
	capSize int	//上限长度
	currentSize int	//当前长度
}


func (newStack *Stack) Pop() interface{} {
	if newStack.isEmpty() {
		last := newStack.dataSource[newStack.currentSize - 1]
		newStack.dataSource = newStack.dataSource[:newStack.currentSize - 1]
		newStack.currentSize--
		return last
	}
	return nil
}

func (newStack *Stack)Push(value interface{})  {
	if !newStack.isFull() {
		newStack.dataSource = append(newStack.dataSource,value)
		newStack.currentSize ++
	}
}

func (newStack *Stack) isFull() bool {
	if newStack.currentSize >= newStack.capSize {
		return true
	}else{
		return false
	}

}

func (newStack *Stack) isEmpty() bool {
	if newStack.currentSize == 0 {
		return true
	}else {
		return false
	}
}

func (newStack *Stack) Clear() {
	newStack.dataSource = make([]interface{},0,10)
	newStack.capSize = 10
	newStack.currentSize = 0
}

func (newStack *Stack) Size() int {
	return newStack.currentSize
}


func NewStackArray() *Stack {
	stack := new(Stack)
	stack.dataSource = make([]interface{},0,10)
	stack.capSize = 10
	stack.currentSize = 0
	return stack
}