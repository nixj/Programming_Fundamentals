

var food = function(x, y) {
    var food = x * y;
    return food;
}

var mealTotal = food(meals, days);
console.log("Each soldier has " + mealTotal + " meals for the upcoming mission.");