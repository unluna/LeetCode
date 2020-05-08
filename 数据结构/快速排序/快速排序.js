/**
 * @params {Array} arr
 * @return {Array}
 */

const arr = [2, 4, 6, 7, 3, 1, 8];

const sort = arr => {
    if (arr.length <= 1) return arr;

    const short = [];
    const long = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[0] > arr[i]) {
            short.push(arr[i])
        } else {
            long.push(arr[i])
        }
    }

    return [...sort(short), arr[0], ...sort(long)]
};

console.log(sort(arr));
