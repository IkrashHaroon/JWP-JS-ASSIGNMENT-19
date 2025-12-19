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
