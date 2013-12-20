var rhombus = areaRhombus(2, 7.8);

var perimeterTriangle = function(x, y, z) {
    var perimeter = x + y + z;
    return perimeter;
}

var triangle = perimeterTriangle(5, 8, 12);

if (rhombus == triangle) {
    console.log("Congratulations, the area of your rhombus " + rhombus + "inches is equal to the perimeter of your triangle " + triangle + "inches.");
} else if (rhombus > triangle) {
    console.log("Your rhombus which is equal to " + rhombus + " inches, is larger than the perimeter of your triangle which is " + triangle + " inches.")
} else {
    console.log("Your rhombus which is equal to " + rhombus + " inches, is smaller than the perimeter of you triangle which is " + triangle + " inches.")
}