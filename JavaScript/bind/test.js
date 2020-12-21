if (!Function.prototype.bind) {
	Function.prototype.bind = function (context) {
		const that = this;
		const aArgs = Array.prototype.slice.call(arguments, 1);

		var fNOP = function () {

		}

		var fBind = function () {
			return that.apply((this instanceof fNOP && context ? this : context), aArgs.concat(Array.prototype.slice.call(arguments)))
		}

		fNOP.prototype = this.prototype;
		fBind.prototype = new fNOP();
		return fBind;
	}
}