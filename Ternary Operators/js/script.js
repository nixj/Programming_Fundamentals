//Johnny Nix 12-12-13 Functions - Wacky

var departments = prompt("How many police departments are in your town?");
var personnel = prompt("How many policemen are in each department?")



var officerTotal = cops(departments, personnel);

if (officerTotal >= 25) {
    console.log("The town will hold a dinner in honor of your town\'s heroes because there are " + officerTotal + " people in your " + departments + " departments");
} else {
    console.log("There are only " + officerTotal + " people in your departments, so there will be no dinner.");
}