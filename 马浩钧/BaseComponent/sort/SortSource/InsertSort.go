package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  08/05/2020 14:52
   @since Go1.13.5
   @abstract:插入排序
*/

func InsertSort(arr []int) []int {
	length := len(arr)
	if length <= 1 {
		return arr
	}else{
		for i := 1; i < length; i++ {
			backup := arr[i]
			j := i-1
			for j>=0 && backup < arr[j] {
				arr[j+1] = arr[j]
				j--
			}
			arr[j+1] = backup
		}
		return arr
	}

}