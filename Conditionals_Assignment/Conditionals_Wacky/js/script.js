//Johnny Nix 12-12-13 Conditionals - Wacky

//calculate what movie is to be watched dependent on the presence and age of children in the group
var children = prompt("Do you have any children present?"); //determines if children are present
var kidsAge = prompt("Are they under the age of 5?"); //determines the ages of the children
var movie; //declares the variable for what movie will be seen

if (children == "yes" && kidsAge < 5) { //calculates if there are children present AND if they are younger than the age of 5
    movie = "Frozen"; //defines which movie will be seen if there are any children under the age of 5
} else {
    movie = "Anchorman 2" //if there are no children under the age of 5, Anchorman 2 will be the viewed movie
}

movie = (children == "yes" && kidsAge < 5) ? "Frozen" : "Anchorman 2"; //tenary code used to assign a value to movie

console.log(movie); //prints out the movie to be viewed