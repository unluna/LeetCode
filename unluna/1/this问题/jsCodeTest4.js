function Go() {
	console.log(this.a);
	this.a = 20;
}

Go.prototype.a = 40;

const go = new Go();
console.log(go.a);
// 40, 20