const bmi = (weight, height, bmi = weight / height ** 2) => (bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal' : bmi <= 30 ? 'Overweight' : 'Obese');

module.exports.bmi = bmi;
