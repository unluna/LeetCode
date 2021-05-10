'use strict'
this.a = 20;
var test = {
	a: 50,
	init: function () {
		function go() {
			console.log(this.a) // Cannot read property 'a' of undefined
		}
		go();
	}
}
var p = test.init;
p();