package main

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  30/04/2020 09:08
   @since Go1.13.5
   @abstract：achieve figure with go language ---
*/

import "fmt"

type Person struct {
	name string
}

func (person *Person) setName(name string) {
	person.name = name
}

func (person *Person) GetInfo() {
	fmt.Println(person.name)
}

func main() {
	p := Person{"zhangsan"}
	p.setName("lisi")
	p.GetInfo()
}