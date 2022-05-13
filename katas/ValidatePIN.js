function validatePIN(pin) {
	if (/\D/g.test(pin)) return false;
	return pin.length === 4 || pin.length === 6;
}

module.exports = validatePIN;
