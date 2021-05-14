'use strict'
this.a = 20;
var test = {
	a: 50,
	init: function () {
		console.log(this) // undefined
		function go() {
			console.log(this) // undefined
			console.log(this.a) // Cannot read property 'a' of undefined
		}
		go();
	}
}
var p = test.init;
p();