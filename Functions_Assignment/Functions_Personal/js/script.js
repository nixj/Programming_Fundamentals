//Johnny Nix 12-19-2013 Functions Assignment Personal

var meals = prompt("How many meals does each soldier get a day?"); //defines the number of meals each soldier get a day based on input
var days = prompt("How many days will the mission take?"); //defines the number of days the mission will go on based on input

var food = function(x, y) { //defines the function food and sets parameters / arguments
    var food = x * y; //calculates the number of meals times the number of days
    return food; //return for variable food
}
