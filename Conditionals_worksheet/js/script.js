// Johnny Nix 12-12-13 Conditions Worksheet

//1. Convert the temperature fahrenheit to celsius
var tempFahrenheit = (90 - 32) * .55555555555; //Define the variable for the given fahrenheit

if (tempFahrenheit == 32.222222221900005) { //
    console.log("The temperature is" + " " + tempFahrenheit + " " +"degrees Celsius");
} else {
    console.log("The equation is incorrect");
}

//2. Make sure the user has the correct username and password for login
var userName = "user"; //define the given for username
var pWord = "password"; //define the given for password

if (userName == "user" && pWord == "password") { //if username and password are correct, welcome user
    console.log("Welcome," + " " + userName + "!");
} else if (userName != "user" && pWord == "password") { //if username is incorrect and the password is correct show unable to find user
    console.log("User not found. Try again.");
} else if (userName == "user" && pWord != "password") { //if username is correct and password is incorrect, show username matches and password does not
    console.log("Password does not match our records.");
} else {
    console.log("Please input the correct login information.");
}


//3. Check the tire pressure
var myTires = (0, 1, 2, 3); //Array for all 4 tires
myTires [0] = 28;
myTires [1] = 28;
myTires [2] = 30;
myTires [3] = 30;

if (myTires[0] == myTires[2] && myTires[1] == myTires[3]) { //Tire 0 and tire 2 match up AND tire 1 and tire 3 match to pass inspection
    console.log("The tires pass spec!");
} else {
    console.log("Get your tires checked out"); //if the tires do not match, then they must be checked out
}
