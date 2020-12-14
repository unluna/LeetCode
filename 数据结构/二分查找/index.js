const binarySearch = (arr, target) => {
	let h = arr.length - 1;
	let l = 0;
	while (l <= h) {
		const m = Math.floor((h + l) / 2);
		if (arr[m] === target) {
			return m;
		}
		if (target > arr[m]) {
			l = m + 1;
		} else {
			h = m - 1;
		}
	}

	return false;
}
const arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
const res = binarySearch(arr, 4);
console.log(res);
