var sodas = prompt("How many sodas do you drink a day?");
console.log(sodas);

var people = prompt("How many people in your house drink soda?");
console.log(people);

var year = prompt("How many days are in a year?");
console.log(year);

var total = sodas * people * 365 / 12;
alert("Your household consumes" + " " + (total) + " " + "12 packs of soda a year!");