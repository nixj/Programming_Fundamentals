//Johnny Nix 12-19-2013 Functions Assignment Personal

var petDog = prompt("Do you already have a dog?"); //defined variable gathering if the user has a dog
var petCat = prompt("Do you have any cats?"); //defined variable gathering if the user has a cat

function pet(x, y) { //function named and arguments set
    var dog = x == "yes"; //variable set when owning a dog equals yes
    var cat = y == "no"; //variable set when owning a cat equals no
}

var pets = pet(petDog, petCat); //variable setting parameter values

nextPet = (petDog = "yes" || petCat == "no") ? console.log("You can't have dog!") : console.log("You can get a dog!"); //ternary that prints to the console to determine if you can have another dog