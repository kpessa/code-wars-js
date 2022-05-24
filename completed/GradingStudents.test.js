const assert = require('assert');

describe('gradingStudents', function () {
	const gradingStudents = require('../katas/GradingStudents').gradingStudents;
	it('84', function () {
		assert.deepEqual(gradingStudents([84]), [85]);
	});

	it('29', function () {
		assert.deepEqual(gradingStudents([29]), [29]);
	});

	it('57', function () {
		assert.deepEqual(gradingStudents([57]), [57]);
	});

	it('73', function () {
		assert.deepEqual(gradingStudents([73]), [75]);
	});

	it('67', function () {
		assert.deepEqual(gradingStudents([67]), [67]);
	});

	it('38', function () {
		assert.deepEqual(gradingStudents([38]), [40]);
	});

	it('33', function () {
		assert.deepEqual(gradingStudents([33]), [33]);
	});
});
