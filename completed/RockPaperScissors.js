function rps(p1, p2) {
	const str = p1[0].toLowerCase() + p2[0].toLowerCase();
	console.log(str);
	switch (str) {
		case 'rs':
		case 'pr':
		case 'sp':
			return 'Player 1 won!';
		case 'ps':
		case 'rp':
		case 'sr':
			return 'Player 2 won!';
		case 'pp':
		case 'rr':
		case 'ss':
			return 'Draw!';
	}
}

module.exports.rps = rps;
