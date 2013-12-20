//Johnny Nix 12-12-13 Functions - Wacky

var departments = prompt("How many police departments are in your town?"); //defines the number of police stations based on the number entered by the user
var personnel = prompt("How many policemen are in each department?") //defines the number of policemen in each department based on the number given by the user

var cops = function(x, y) { //anonymous function to determine the number of personnel
    var people = x * y; //defines the variable calculating the number of departments by the number of personnel in each department
    return people; //return for the variable people
}

var officerTotal = cops(departments, personnel); //defines the parameters / arguments for the officer total

if (officerTotal >= 25) {
    console.log("The town will hold a dinner in honor of your town\'s heroes because there are " + officerTotal + " people in your " + departments + " departments");
} else {
    console.log("There are only " + officerTotal + " people in your departments, so there will be no dinner.");
}