// Level 5 kyu kata

/*
[{
    "time": 2,
    "timeWaiting": 0,
    "brewing": false,
}, {
    "time": 3,
    "timeWaiting": 0,
    "brewing": false,
},{
    "time": 4,
    "timeWaiting": 0,
    "brewing": false,
}]
*/

function barista(coffees, cMachines) {
	let time = 0;
	let dirtyCoffeeMachines = [];
	let completed = [];

	// Case: Coffees include waters, just filter out water, giving to customer
	coffees = coffees.filter(c => c > 0);

	coffees.sort((a, b) => a - b);
	let queue = coffees.map((c, i) => {
		return {
			time: c,
			timeWaiting: 0,
			brewing: false,
		};
	});

	while (queue.length > 0) {
		// Case: Coffee Machine available and customer pending
		while (cMachines && queue.some(c => c.brewing === false)) {
			let nextCoffee = queue.find(c => c.brewing === false);
			nextCoffee.brewing = true;
			cMachines--;
		}

		// Case: Coffee finished, can complete transaction and push to completed array
		while (queue.length && queue[0].time === 0) {
			completed.push(queue.shift());
			dirtyCoffeeMachines.push(2);
		}
		// Update each person based on increment of time

		for (let person of queue) {
			// Case: Coffee Machine is brewing for customer
			if (person.brewing) person.time--;
			// Case: For all customers waiting, increment timeWaiting
			person.timeWaiting++;
		}

		// Case: Coffee Machine is dirty and needs to be cleaned
		if (dirtyCoffeeMachines.length) {
			dirtyCoffeeMachines = dirtyCoffeeMachines.map(c => c - 1);

			while (dirtyCoffeeMachines.length && dirtyCoffeeMachines[0] === 0) {
				dirtyCoffeeMachines.shift();
				cMachines++;
			}
		}

		time++;
	}

	return completed.reduce((acc, c) => acc + c.timeWaiting, 0);
}

barista([1, 2, 3, 4, 8], 3);

module.exports.barista = barista;
