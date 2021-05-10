this.a = 20;
var test = {
	a: 50,
	init: function () {
		function go() {
			console.log(this.a)
		}

		go();
	}
}
var p = test.init;
p();// 20