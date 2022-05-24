function barista(coffees) {
	let minutes = 0;

	coffees.sort((a, b) => a - b);

	while (coffees.length) {
		let currentCoffee = coffees.shift();
		minutes += currentCoffee;

		if (coffees.length) minutes += coffees.length * (currentCoffee + 2);
	}

	return minutes;
}

module.exports.barista = barista;
