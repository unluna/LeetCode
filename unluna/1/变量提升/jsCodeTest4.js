var x = 1, y = 1, z = 1;

function add(x) {
	return x = x + 1;
}

y = add(x);

function add(x) {
	return x = x + 3;
}

z = add(x);

console.log(y,z)