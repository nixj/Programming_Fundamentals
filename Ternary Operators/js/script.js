

var food = function(x, y) {
    var food = x * y;
    return food;
}

var mealTotal = food(meals, days);
console.log("Each soldier has " + mealTotal + " meals for the upcoming mission.");



//Johnny Nix 12-19-2013 Functions Assignment Personal

var meals = prompt("How many meals does each soldier get a day?"); //defines the number of meals each soldier get a day based on input
var days = prompt("How many days will the mission take?");
