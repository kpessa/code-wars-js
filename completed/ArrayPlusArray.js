Array.prototype.sum = function () {
	return this.reduce((acc, curr) => acc + curr);
};

function arrayPlusArray(arr1, arr2) {
	return arr1.sum() + arr2.sum();
}

module.exports.arrayPlusArray = arrayPlusArray;
