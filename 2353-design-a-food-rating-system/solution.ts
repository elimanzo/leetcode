// https://leetcode.com/problems/design-a-food-rating-system/description/
// 2353-design-a-food-rating-system
type FoodData = {name: string; cuisine: string, rating: number};

class FoodRatings {
    foodMap: Map<string, FoodData> = new Map();
    cuisineFoodMap: Map<string, typeof MaxPriorityQueue> = new Map();
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
      for(let i = 0; i < foods.length; i++) {
        this.foodMap.set(foods[i], {name: foods[i], cuisine: cuisines[i], rating: ratings[i] });
        if(!this.cuisineFoodMap.has(cuisines[i])) {
          this.cuisineFoodMap.set(cuisines[i], new MaxPriorityQueue(
            {
              compare: (x: FoodData, y: FoodData) => (x.rating === y.rating) ? x.name.localeCompare(y.name) : (y.rating - x.rating)
            }
          ));
        }
        this.processPQ(foods[i], cuisines[i], ratings[i]);
      }
    }

    changeRating(food: string, newRating: number): void {
        const foodCuisine = this.foodMap.get(food).cuisine;
        this.foodMap.set(food, {name: food, cuisine: foodCuisine, rating: newRating});
        this.processPQ(food, foodCuisine, newRating);
    }

    highestRated(cuisine: string): string {
      return this.cuisineFoodMap.get(cuisine).front().name;
    }

    processPQ(name: string, cuisine: string, rating: number): void {
      const pq = this.cuisineFoodMap.get(cuisine);
      pq.enqueue({name, cuisine, rating});
      while (this.foodMap.get(pq.front().name).rating !== pq.front().rating) {
        pq.dequeue();
      }
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
