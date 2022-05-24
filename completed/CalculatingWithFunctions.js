'zero, one, two, three, four, five, six, seven, eight, nine'.split(', ').forEach(function (name, n) {
	this[name] = f => (f ? f(n) : n);
});

function plus(a) {
	return function (b) {
		return a + b;
	};
}
function minus(a) {
	return function (b) {
		return b - a;
	};
}
function times(a) {
	return function (b) {
		return a * b;
	};
}
function dividedBy(a) {
	return function (b) {
		return Math.floor(b / a);
	};
}

module.exports.zero = zero;
module.exports.one = one;
module.exports.two = two;
module.exports.three = three;
module.exports.four = four;
module.exports.five = five;
module.exports.six = six;
module.exports.seven = seven;
module.exports.eight = eight;
module.exports.nine = nine;
module.exports.plus = plus;
module.exports.minus = minus;
module.exports.times = times;
module.exports.dividedBy = dividedBy;
