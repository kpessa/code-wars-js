function gradingStudents(grades) {
	// write your code here
	return grades.map(grade => {
		if (grade < 38) return grade;
		if (grade % 5 >= 3) return grade + (5 - (grade % 5));
		return grade;
	});
}

module.exports.gradingStudents = gradingStudents;
