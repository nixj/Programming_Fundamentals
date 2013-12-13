//Johnny Nix 12-12-13 Conditionals - Personal

var age = prompt("How old are you?"); //prompts a user to give their age
var guardiansSigned = prompt("How many guardians signed your permission slip?"); //prompts a user to input how many parents or guardians signed the permission slip

if (age >= 16 && guardiansSigned >= 1) { //calculates if a person is at least 16 AND has at least one parent's permission to attend the trip
    console.log("Thank you. You are able to go on this trip!");  //confirms the person is eligible to go on the trip as they meet the necessary requirements
} else if (age < 16 && guardiansSigned > 1) { //calculates the requirements for persons under 16. Determines that there are at least 2 or more signatures for those under 16
    console.log("Thank you. Since you have guardian permission, you can go on this trip!"); //confirms persons under 16 meets the requirements to go on the trip
} else {
    console.log("Unfortunately, you can not go on this trip.");  //confirms that persons who do not meet the age and guardian signatures requirements are not eligible for the trip
}