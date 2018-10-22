const menu = {
  courses: {
    appetizers: [],
   	mains: [],
    desserts: [],

  get myAppetizers() {
    return this.appetizers;
  },
  set myAppetizers(appetizersIn) {
    this.appetizers = appetizersIn;
  },
  get myMains() {
    return this.mains;
  },
  set myMains(mainsIn) {
    this.mains = mainsIn;
  },
  get myDesserts() {
    return this.desserts;
  },
  set myDesserts(dessertsIn) {
    this.desserts = dessertsIn;
  },
},

  get myCourses() {
    return {
      appetizers: this.courses.appetizers,
      mains: this.courses.mains,
      desserts: this.courses.desserts,
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

  this.courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice.toFixed(2)}.`
  },
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

let meal = menu.generateRandomMeal();

console.log(meal);
