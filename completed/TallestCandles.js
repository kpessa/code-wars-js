function birthdayCakeCandles(candles) {
	if (!candles || candles.length === 0) return 0;
	candles.sort((a, b) => b - a);
	return candles.filter((c, i) => c === candles[0]).length;
}

module.exports.birthdayCakeCandles = birthdayCakeCandles;
