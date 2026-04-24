// Step 1: Variable Data
var burgers = ['Hamburger', 'Cheeseburger'];
var featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
  var newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Step 3: Variable Declaration and Scope
if (true) {
  var anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }
}