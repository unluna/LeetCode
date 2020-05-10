package main

import (
	"./SortSource"
	"fmt"
)

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  07/05/2020 23:04
   @since Go1.13.5
*/

func main() {
	arr := []int{1,9,6,3,4,8,7,2,5,0}
	fmt.Println("OriginArray:",arr)
	//fmt.Println("QuickSort:",SortSource.QuickSort(arr))
	//fmt.Println("SelectSort:",SortSource.SelectSort(arr))
	//fmt.Println("InsertSort:",SortSource.InsertSort(arr))
	//fmt.Println("BubbleSort:",SortSource.BubbleSort(arr))
	//fmt.Println("HeapSort:",SortSource.HeapSort(arr))
	//fmt.Println("ParitySort:",SortSource.ParitySort(arr))
	fmt.Println("MergeSort",SortSource.MergeSort(arr))
}