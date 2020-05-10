package main

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  2020/4/27 下午9:59
   @since Go1.13.5
   @abstract a list base on the go language
*/

type (
	//Queue
	Queue struct {
		top    *node
		rear   *node
		length int
	}
	//node with double link list
	node struct {
		pre   *node
		next  *node
		value interface{}
	}
)

// Create a new queue
func New() *Queue {
	return &Queue{nil, nil, 0}
}
//get the length of queue
func (this *Queue) Len() int {
	return this.length
}
//return true with the queue is not empty
func (this *Queue) Any() bool {
	return this.length > 0
}
//get the top element of the queue
func (this *Queue) Peek() interface{} {
	if this.top == nil {
		return nil
	}
	return this.top.value
}
//enqueue
func (this *Queue) Push(v interface{}) {
	n := &node{nil, nil, v}
	if this.length == 0 {
		this.top = n
		this.rear = this.top
	} else {
		n.pre = this.rear
		this.rear.next = n
		this.rear = n
	}
	this.length++
}
//dequeue
func (this *Queue) Pop() interface{} {
	if this.length == 0 {
		return nil
	}
	n := this.top
	if this.top.next == nil {
		this.top = nil
	} else {
		this.top = this.top.next
		this.top.pre.next = nil
		this.top.pre = nil
	}
	this.length--
	return n.value
}