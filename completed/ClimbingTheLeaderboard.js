function climbingLeaderboard(ranked, player) {
	function binarySearch(arr, val) {
		let start = 0;
		let end = arr.length - 1;
		let mid = Math.floor((start + end) / 2);
		while (arr[mid] !== val && start <= end) {
			if (val < arr[mid]) start = mid + 1;
			else end = mid - 1;
			mid = Math.floor((start + end) / 2);
		}
		return arr[mid] === val ? mid + 1 : mid + 2;
	}

	ranked = ranked.filter((v, i, a) => v !== a[i - 1]).map(Number);
	player = player.map(Number);

	let res = [];
	for (let playerScore of player) {
		res.push(binarySearch(ranked, playerScore));
	}
	return res;
}

module.exports.climbingLeaderboard = climbingLeaderboard;
