function timeConversion(str) {
	const pad = n => (n < 10 ? `0${n}` : n);

	let [h, m, s] = str.slice(0, -2).split(':').map(Number);
	const ampm = str.slice(-2);

	if (ampm === 'PM') h = (h % 12) + 12;
	if (ampm === 'AM' && h === 12) h = 0;

	return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

module.exports.timeConversion = timeConversion;
