const search = (arr, target) => {
	let l = 0;
	let r = arr.length - 1;
	while (l <= r) {
		const mid = Math.floor(r - l);

		if (arr[mid] === target) return mid;
		if (arr[l] < target) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return false
}

const arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
const res = search(arr, 4);
console.log(res);