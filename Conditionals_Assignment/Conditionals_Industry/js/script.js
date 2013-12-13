//Johnny Nix 12-12-13 Conditionals - Industry

var age = prompt("How old are you?"); //prompts the user to input their age
var drink = prompt("Will you want a drink with your order?"); //asks the user if they will be adding a drink to their order

if (age >= 55 && drink == "yes") { //determines if the the user's age is over 55 And having a drink
    console.log("You're meal total comes out to $6"); //prints out the price of a meal for a 55 year old or older with a drink
} else if (age >= 55 && drink == "no") { //determines if the user's age is over 55 AND not having a drink
    console.log("You're meal total comes out to $5.50"); //prints out the price of a meal for a 55 year old or older without a drink
} else if (age < 55 && drink == "yes") { //determines if the user's age is less than 55 AND having a drink
    console.log("You're meal total comes out to $7"); //prints out the price of a meal for someone under 55 years of age with a drink
}else {
    console.log("You're meal total comes out to $6.50"); //prints out the price of a meal for someone under 55 years of age without a drink
}