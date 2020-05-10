package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  07/05/2020 23:04
   @since Go1.13.5
   @abstract:选择排序
*/
func SelectSort(arr []int ) []int {
	length := len(arr)
	if length <= 1 {
		return arr
	}else{
		for i := 0; i<length - 1; i ++ {
			min := i //假定第一个最大
			for j := i+1; j < length; j++ {
				if arr[j] < arr[min] {
					min = j
				}
			}
			if i != min {
				arr[i],arr[min] = arr[min],arr[i]
			}
		}
		return arr
	}
}