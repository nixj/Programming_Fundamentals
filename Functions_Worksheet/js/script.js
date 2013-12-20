//Johnny Nix 12-19-2013 Functions Worksheet

var radius = 3; //defined variable for the radius as given

var total = calcCirc(2, 3.14, 3); //defined calcCirc to reflect the formula to find the circumference of a circle 2 times Pi times the Radius
//Also defined the result as the variable total to be printed

function calcCirc(d, p, n) { //defined function calcCirc and set parameters
    var circumference = d * p * n; //defined variable to calculate the circumference
    return circumference //added return to reflect the circumference
}
console.log("The circumference of the circle is " + total); //prints the total of the circumference to the console

var weight = 125; //defined variable for the victim's weight

var total = calcStings(weight, 8.666666687); //defined calcStings to reflect the victim's weight and the number of stings needed to kill
//Also defined the result as the variable total to be printed

function calcStings(w, s) { //defined function calcStings and set parameters
    var stings = w * s; //defined variable to calculate the number of stings required to kill the victim
    return stings; //added return to reflect the total number of stings
}
