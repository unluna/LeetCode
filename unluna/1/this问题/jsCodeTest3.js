this.a = 20;
var test = {
	a: 50,
	init: function () {
		const go = () => {
			console.log(this.a)
		}
		go();
	}
}
test.init(); // 50
