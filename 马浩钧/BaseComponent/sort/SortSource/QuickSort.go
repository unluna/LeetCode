package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  07/05/2020 21:47
   @since Go1.13.5
   @abstract:快速排序
*/

func QuickSort(arr []int) []int {
	length := len(arr)
	if length <= 1 {
		return arr
	}else {
		splitData := arr[0]	//以第一个为分割基准
		low := make([]int,0,0)	//小于
		high := make([]int,0,0)	//大于
		middle := make([]int,0,0) //等于	=》减少相同元素重复排序时间
		middle = append(middle,splitData)	//添加初始元素
		for i := 1; i < length; i++ {
			if arr[i] < splitData {
				low = append(low, arr[i])
			}else if arr[i] > splitData {
				high = append(high,arr[i])
			}else {
				middle = append(middle,arr[i])
			}
		}
		low,high = QuickSort(low),QuickSort(high) //递归
		myarr := append(append(low,middle...),high...)
		return myarr
	}
}

