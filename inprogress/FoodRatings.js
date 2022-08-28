class FoodRatings {
  constructor(foods, cuisines, ratings) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;

    this.allFoods = [];
    for (let i = 0; i < foods.length; i++) {
      this.allFoods.push({
        food: this.foods[i],
        cuisine: this.cuisines[i],
        rating: this.ratings[i],
      });
    }

    this.sort();

    console.log(this.allFoods);
  }

  sort() {
    this.allFoods.sort((a, b) => {
      if (a.rating === b.rating) {
        return a.food.localeCompare(b.food);
      } else return b.rating - a.rating;
    });
  }

  filter(cuisine) {
    return this.allFoods.filter(food => food.cuisine === cuisine);
  }

  changeRating(food, newRating) {
    for (let i = 0; i < this.allFoods.length; i++) {
      if (this.allFoods[i].food === food) {
        this.allFoods[i].rating = newRating;
      }
    }
    this.sort();
  }

  highestRated(cuisine) {
    return this.filter(cuisine)[0].food;
  }
}

module.exports.FoodRatings = FoodRatings;
