const binaryArrayToNumber = arr => arr.reduce((p, c, i) => p + c * Math.pow(2, arr.length - i - 1), 0);

module.exports.binaryArrayToNumber = binaryArrayToNumber;
