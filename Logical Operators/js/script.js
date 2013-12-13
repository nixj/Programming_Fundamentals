// Conditional Logic - Logical Operators

var budget = 300;
var smartphonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if (smartphonePrice < budget || wonLottery) { //wonLottery === true is the same as wonLottery
    console.log("We can buy the phone!");
} else {
    console.log("No phone for you!!");
}
