//Qs 1
var userNumber = Number(prompt('Enter a number'));

//NaN check
if (isNaN(userNumber)) {
    alert("Please enter a valid number.");
}
//positive number check
else if (userNumber <= 0) {
    alert("Please enter a positive number.");
}
else {
    document.writeln("Number :" + userNumber + "<br>");
    //Round off value
    var roundNumber =  Math.round(userNumber);
    document.writeln("Round off value :" + roundNumber + "<br>");
    //floor value
    var floorNumber = Math.floor(userNumber);
    document.writeln("Floor Value :" + floorNumber + "<br>");
    //ceil value
    var ceilNumber = Math.ceil(userNumber);
    document.writeln("Ceil Value :" + ceilNumber + "<br>");

}
//Qs 2
var userNumbernegative = Number(prompt('Enter a number'));

//NaN check
if (isNaN(userNumbernegative)) {
    alert("Please enter a valid number.");
}
//positive number check
else if (userNumbernegative >= 0) {
    alert("Please enter a negative number.");
}
else {
    document.writeln("Number :" + userNumbernegative + "<br>");
    //Round off value
    var roundValue=  Math.round(userNumbernegative);
    document.writeln("Round off value :" + roundValue + "<br>");
    //floor value
    var floorValue = Math.floor(userNumbernegative);
    document.writeln("Floor Value :" + floorValue + "<br>");
    //ceil value
    var cielValue = Math.ceil(userNumbernegative);
    document.writeln("Ceil Value :" + cielValue);

}
//Qs 3
var userValue = Number(prompt('Enter a number to find its absolute value'));
if (isNaN(userValue)) {
    alert("Please enter a valid number.");
}
else {
    var absValue = Math.abs(userValue);
    document.writeln("The Absolute value of " + userValue + " is " + absValue);
}


//Qs 4

var randomDiceValue = Math.floor(Math.random() * 6) + 1;
document.writeln("<br>Random Dice Value : " + randomDiceValue);


//Qs 5
var toss = Math.floor(Math.random() * 2); 

if (toss === 0) {
    document.writeln("<br>Random Coin Value : Heads");
}
else {
    document.writeln("<br>Random Coin Value : Tails");
}

//Qs 6
var RandomValue = Math.floor(Math.random() * 100) + 1;
document.writeln("<br>Random Number between 1 and 100 : " + RandomValue);