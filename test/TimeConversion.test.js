const assert = require('assert');

describe('timeConversion', function () {
	const timeConversion = require('../katas/TimeConversion').timeConversion;

	it('12:00:00AM', function () {
		assert.equal(timeConversion('12:00:00AM'), '00:00:00');
	});

	it('12:00:00PM', function () {
		assert.equal(timeConversion('12:00:00PM'), '12:00:00');
	});

	it('12:01:00PM', function () {
		assert.equal(timeConversion('12:01:00PM'), '12:01:00');
	});

	it('12:01:00AM', function () {
		assert.equal(timeConversion('12:01:00AM'), '00:01:00');
	});
});
