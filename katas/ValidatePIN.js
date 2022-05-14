// function validatePIN(pin) {
// 	if (/\D/g.test(pin)) return false;
// 	return pin.length === 4 || pin.length === 6;
// }

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

validatePIN('1234');

module.exports = validatePIN;
