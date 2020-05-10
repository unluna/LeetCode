package SortSource

/*
   @author katholikos katholik@mail.ccsf.edu
   @version  10/05/2020 16:16
   @since Go1.13.5
   @abstrat 奇偶排序
*/

func ParitySort(arr []int) []int {
	length := len(arr)
	if length <= 1 {
		return arr
	}else {
		isSorted := false
		for ;isSorted == false; {
			isSorted = true
			for i := 1; i < length - 1; i += 2{
				if arr[i] > arr[i+1] {
					arr[i],arr[i+1] = arr[i+1],arr[i]
					isSorted = false
				}

			}
			for i := 0; i < length - 1; i += 2 {
				if arr[i] > arr[i+1] {
					arr[i],arr[i+1] = arr[i+1],arr[i]
					isSorted = false
				}
			}
		}
		return arr
	}
}