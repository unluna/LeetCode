package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  08/05/2020 14:51
   @since Go1.13.5
   @abstract:冒泡排序
*/

func BubbleSort(arr []int) []int {
	length := len(arr)
	if length <= 1 {
		return arr
	}else{
		for i := 0; i < length - 1; i++ {
			isSorted := false
			for j := 0; j < length-1-i; j++ {
				if arr[j] > arr[j+1] {
					arr[j], arr[j+1] = arr[j+1], arr[j]
					isSorted = true
				}
			}
			if !isSorted {
				break
			}
		}
	}

	return arr
}