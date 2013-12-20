var petCat = prompt("Do you have any cats?");

function pet(x, y) {
    var dog = x == "yes";
    var cat = y == "no";
}

var pets = pet(petDog, petCat);

nextPet = (petDog = "yes" || petCat == "no") ? console.log("You can't have dog!") : console.log("You can get a dog!");