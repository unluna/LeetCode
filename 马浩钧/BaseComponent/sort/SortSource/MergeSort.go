package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  10/05/2020 16:39
   @since Go1.13.5
*/

func merge(leftArr []int, rightArr []int) []int {
	leftIndex:=0      //左边索引
	rightIndex:=0     //右边索引
	var lastArr []int //最终的数组
	for leftIndex<len(leftArr) &&  rightIndex<len(rightArr){
		if leftArr[leftIndex]  <rightArr[rightIndex]{
			lastArr=append(lastArr,leftArr[leftIndex] )
			leftIndex++

		}else if leftArr[leftIndex]  >rightArr[rightIndex]{
			lastArr=append(lastArr,rightArr[rightIndex] )
			rightIndex++
		} else{
			lastArr=append(lastArr,rightArr[rightIndex] )
			lastArr=append(lastArr,leftArr[leftIndex])
			leftIndex++
			rightIndex++
		}
	}
	for leftIndex< len(leftArr){  //把没有结束的归并过来
		lastArr=append(lastArr,leftArr[leftIndex] )
		leftIndex++
	}
	for rightIndex<len(rightArr){  //把没有结束的归并过来
		lastArr=append(lastArr,rightArr[rightIndex] )
		rightIndex++
	}
	return lastArr
}

func MergeSort(arr []int) []int {
	length := len(arr)
	if length <= 1 {
		return arr
	}else if length>1 &&length <5{
		return InsertSort(arr)
	} else {
		mid := length / 2
		leftArr:=MergeSort(arr[:mid])
		rightArr:=MergeSort(arr[mid:])
		return merge(leftArr,rightArr)
	}
}