//Johnny Nix 12-12-13 Functions - Industry

var areaRhombus = function(b, h) { //anonymous function for the area of a rhombus
    var areaR = b * h; // defines the variable areaR which calculates the base times the height of a rhombus
    return areaR; //return for the variable areaR
}

var rhombus = areaRhombus(2, 7.8); //defines the variable rhombus and the necessary arguments / parameters

var perimeterTriangle = function(x, y, z) {
    var perimeter = x + y + z;
    return perimeter;
}