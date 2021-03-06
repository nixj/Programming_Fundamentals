//Johnny Nix 12-12-13 Functions - Industry

var base = prompt("What is the base of the rhombus?");
var height = prompt("What is the height of the rhombus?");

var areaRhombus = function(b, h) { //anonymous function for the area of a rhombus
    var areaR = b * h; // defines the variable areaR which calculates the base times the height of a rhombus
    return areaR; //return for the variable areaR
}

var rhombus = areaRhombus(base, height); //defines the variable rhombus and the necessary arguments / parameters

var perimeterTriangle = function(x, y, z) { //anonymous function for the perimeter of a triangle
    var perimeter = (x + y + z); //defines the variable perimeter which adds together the three sides of a triangle
    return perimeter; //return for the variable perimeter
}

var triangle = perimeterTriangle(4, 5, 12); //defines the variable triangle and the necessary arguments / parameters

if (rhombus == triangle) { //if statement determining if the area of the rhombus equals the perimeter of the triangle
    console.log("Congratulations, the area of your rhombus " + rhombus + "inches is equal to the perimeter of your triangle " + triangle + "inches."); //prints the following statement to the console
} else if (rhombus > triangle) { //else if statement determining if the area of the rhombus is greater than the perimeter of the triangle
    console.log("Your rhombus which is equal to " + rhombus + " inches, is larger than the perimeter of your triangle which is " + triangle + " inches.") //prints the following statement to the console
} else { //else statement that is determined if the rhombus' area and the triangle's perimeter are not equal and the area of the rhombus is smaller than the perimeter of the triangle
    console.log("Your rhombus which is equal to " + rhombus + " inches, is smaller than the perimeter of you triangle which is " + triangle + " inches.") //prints the following statement to the console
}