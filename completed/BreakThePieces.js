// url: https://www.codewars.com/kata/527fde8d24b9309d9b000c4e/train/javascript

function fromRectangleToASCIIArt(rectangle) {
	let strArr = [];
	let { height, width } = rectangle;
	for (let h = 0; h < height; h++) {
		let arr;
		if (h === 0 || h === height - 1) {
			arr = Array(width).fill('-');
			arr[0] = '+';
			arr[width - 1] = '+';
		} else {
			arr = Array(width).fill(' ');
			arr[0] = '|';
			arr[width - 1] = '|';
		}
		strArr.push(arr.join(''));
	}
	let str = strArr.join('\n');
	return str;
}

function returnShapes(shape) {
	let grid = shape.split('\n');

	let rectangles = [];
	for (let i = 0; i < grid.length - 1; i++)
		for (let j = 0; j < grid[i].length - 1; j++) {
			if (grid[i][j] === '+') {
				let height = 2;
				for (let row = i + 1; grid[row][j] !== '+'; row++) height++;
				let width = 2;
				for (let col = j + 1; grid[i][col] !== '+'; col++) width++;

				rectangles.push({ height, width });
			}
		}

	return rectangles;
}

function breakPieces(shape) {
	let rectangles = returnShapes(shape);
	let pieces = [];
	for (let rect of rectangles) {
		let str = fromRectangleToASCIIArt(rect);
		pieces.push(str);
	}
	return pieces;
}

module.exports.fromRectangleToASCIIArt = fromRectangleToASCIIArt;
module.exports.returnShapes = returnShapes;
module.exports.breakPieces = breakPieces;
