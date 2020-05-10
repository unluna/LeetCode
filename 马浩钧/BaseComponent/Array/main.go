package main

import (
	"./ArrayList"
	"fmt"
)

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  01/05/2020 20:03
   @since Go1.13.5
*/


 
func main() {
	list := ArrayList.NewArrayList()
	list.Append("a1")
	list.Append("b2")
	list.Append("c3")
	fmt.Println(list)

	//traditional way
	for i := 0; i< list.ArraySize; i++ {
		fmt.Println(i)
		fmt.Println(list.DataStore[i])

		//直接操作原数据--出现bug
		//if list.DataStore[i] == "a1" {
		//	_ = list.Delete(i)
		//	i--
		//}

	}

	fmt.Println(list)

	//Iterator way
	for it := list.Iterator(); it.HasNext(); {
		item,_ :=it.Next()
		if item == "b2" {
			it.Remove()
		}
		fmt.Println(item)
	}
	fmt.Println(list)
}
