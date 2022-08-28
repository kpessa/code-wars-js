const assert = require('assert');

describe('FoodRatings', function () {
  const FoodRatings = require('./FoodRatings').FoodRatings;
  let i = 0;
  let foodRatings = new FoodRatings(
    ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
    ['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
    [9, 12, 8, 15, 14, 7]
  );

  it(`Test #${i++}`, function () {
    assert.equal(foodRatings.highestRated('korean'), 'kimchi');
    assert.equal(foodRatings.highestRated('japanese'), 'ramen');
    foodRatings.changeRating('sushi', 16);
    console.log(foodRatings.filter('japanese'));
    assert.equal(foodRatings.highestRated('japanese'), 'sushi');
    foodRatings.changeRating('ramen', 16);
    console.log(foodRatings.filter('japanese'));
    assert.equal(foodRatings.highestRated('japanese'), 'ramen');
  });

  // it(`Test #${i++}`, function () {});

  //   it(`Test #${i++}`, function () {
  //     assert.equal(FoodRatings(), true);
  //   });
});
