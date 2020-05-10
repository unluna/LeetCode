package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  08/05/2020 17:57
   @since Go1.13.5
   @abstract:堆排序
*/

func HeapSort(arr []int) []int {
	length := len(arr)
	//循环登顶
	for i := 0; i < length; i++ {
		abstractTree := length - i //对未登顶数组执行登顶
		HeapMax(arr,abstractTree)
		if i < length {
			arr[0], arr[abstractTree - 1] = arr[abstractTree - 1], arr[0]
		}
	}
	return arr
}


func HeapMax(arr []int, length int) []int {
	if length <= 1 {
		return arr
	}else {
		depthTag := length/2 - 1
		for i := depthTag; i >= 0; i-- {
			topMax := i
			leftChild := 2*i + 1
			rightChild := 2*i + 2
			if leftChild <= length - 1 && arr[leftChild] > arr[topMax] {
			 	topMax  = leftChild
			}
			if rightChild <= length - 1 && arr[topMax] < arr[rightChild] {
				topMax = rightChild
			}
			if topMax != i {
				arr[i],arr[topMax] = arr[topMax],arr[i]
			}
		}
		return arr
	}
}