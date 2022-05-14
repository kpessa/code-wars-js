const getMiddle = s => {
	const middle = Math.floor(s.length / 2);
	const oddLength = s.length % 2 === 1;
	const evenLength = s.length % 2 === 0;
	// write your code here
	if (oddLength) return s[middle];
	if (evenLength) return s.slice(middle - 1, middle + 1);

	throw new Error(); // shouldn't get here!
};

module.exports = getMiddle;
