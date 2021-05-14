// this.a = 20;
//
// function go() {
// 	console.log(this.a);
// 	this.a = 30;
// }
//
// go.prototype.a = 40;
// var test={
// 	a:50,
// 	init:function (fn) {
// 		fn();
// 		console.log(this.a);
// 		return fn;
// 	}
// };
//
// console.log((new go()).a);
// test.init(go);
// var p = test.init(go);
// p()
// // 40 30 20 50 30 50 30
// // go()一遍之后，this.a就写进去了


function go() {
	console.log(this.a);
	this.a = 30;
}

const asd = new go()


go() // un
// go() // 30