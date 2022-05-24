function countApplesAndOranges(s, t, a, b, apples, oranges) {
	return [apples.filter(apple => apple + a >= s && apple + a <= t).length, oranges.filter(orange => orange + b >= s && orange + b <= t).length];
}

module.exports.countApplesAndOranges = countApplesAndOranges;
