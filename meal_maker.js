const menu = {
  _courses: {
  	appetizers: [],
   	mains: [],
    desserts: []
	},
  get appetizers() {
    return menu[_courses].appetizers
  },
  set appetizers(appetizerIn) {},
  get mains() {
    return menu[_courses].mains
  },
  set mains(mainIn) {},
  get desserts() {
    return menu[_courses].desserts
  },
  set desserts(dessertIn) {},
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {dishName, dishPrice};
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes.randomIndex;
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`
  }
};
menu.addDishToCourse('appetizers', 'Won Ton Soup', 3.00);
menu.addDishToCourse('appetizers', 'Potstickers', 4.50);
menu.addDishToCourse('appetizers', 'Spring Roll', 1.50);

menu.addDishToCourse('mains', "General Tso's Chicken", 7.00);
menu.addDishToCourse('mains', 'Kung Pao Shrimp', 8.00);
menu.addDishToCourse('mains', 'Pineapple Fried Rice', 7.50);

menu.addDishToCourse('desserts', 'Fried Ice Cream', 3.50);
menu.addDishToCourse('desserts', 'Sweet Bun', 2.50);
menu.addDishToCourse('desserts', 'Fruit Bowl', 3.00);

const meal = menu.generateRandomMeal();

console.log(meal);
