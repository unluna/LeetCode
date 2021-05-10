function fn() {
	console.log("out");
}

function init() {
	if (false){
		function fn() {
			console.log("in");
		}
	}
	fn();
}
init(); // TypeError: fn is not a function