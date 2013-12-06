//Johnny Nix 12-5-13 Expressions Worksheet


//Dog Years
var age = 1; //declare dogs age in human years
age *= 7; //multiply current age by 7 for dog years
console.log(age); //print the result

//Slice of Pie I
var slice = 8; //declare a variable for the number of slices per pizza
var guests = 10; //declare a variable for the number of guests
var pies = 6; //declare a variable for the number of pies
pieces = slice * pies / guests; //calculate how many pieces each guest will get
console.log(pieces); //print the result

//Slice of Pie II
pieces = slice * pies % guests; //calculate by dividing the total number of pieces by the number of guests to determine the remainder
console.log(pieces);

//Average Shopping Bill
var week1 = 100; //week 1 total
var week2 = 55; //week 2 total
var week3 = 60; //week 3 total
var week4 = 89; //week 4 total
var week5 = 58; //week 5 total

average = (week1 + week2 + week3 + week4 + week5)/5; //calculate average by adding all weeks totals together and dividing by the number of weeks
console.log(average);

//Discounts
var itemDescription = "Football"; //declare values for item descripton
var item = 25; //declare value for item price
var discPercent = 5; //declare value for discount percentage
var tax = 8; //declare value for tax total

discAmount = item * .05; //determine the amount of the discount
discTotalNoTax = item - discAmount; //determine the total of the item with discount and no tax by subtracting the discount total from the original price
taxTotal = discTotalNoTax * .08; //determine the amount of sales tax by multiplying the total after discount by the tax percent
discTotalWithTax = taxTotal + discTotalNoTax; //determine the total with tax by adding teh total after discount with the total percent

console.log("Your" + " " + itemDescription + " " + "was originally $" + item + " " + ", but after a" + " " + discPercent + "% discount, it is now $" + discTotalNoTax + " " + "without tax, and $" + discTotalWithTax + " " + "with tax");
