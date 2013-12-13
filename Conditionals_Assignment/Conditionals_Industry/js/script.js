//Johnny Nix 12-12-13 Conditionals - Industry

var age = prompt("How old are you?");
var drink = prompt("Will you want a drink with your order?");

if (age >= 55 && drink == "yes") {
    console.log("You're meal total comes out to $6");
} else if (age >= 55 && drink == "no") {
    console.log("You're meal total comes out to $5.50");
}