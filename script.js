// JavaScript Document 
// Chapters 26-30

document.writeln("<h1>Js Math Methods Chapter 26-30</h1>");
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

// //Qs 6
var RandomValue = Math.floor(Math.random() * 100) + 1;
document.writeln("<br>Random Number between 1 and 100 : " + RandomValue);


//Qs 7
var userWeight = prompt("Enter your weight in kilograms (e.g., 70, 70.5, 70kgs, 70.2kilograms):");
var WeightValue = parseFloat(userWeight);
if (isNaN(WeightValue)) {
    alert("Please enter a valid weight.");
} else {
    document.writeln("<br>Your weight is: " + WeightValue + " kilograms");
}

//Qs 8
var userInput = Number(prompt("Enter a number between 1 and 10 to guess the secret number:"));
var secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("Secret Number (for testing purposes): " + secretNumber);


if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    alert("Please enter a valid number between 1 and 10.");
}
else if (userInput === secretNumber) {
    alert("Congratulations! You guessed the secret number " + secretNumber + " correctly!");
}
else if (userInput < secretNumber) {
    alert("Wrong guess! Try a bigger number.");
}
else {
    alert("Wrong guess! Try a smaller number.");
}

// Date Methods Chapter 31-34

document.writeln("<h1>Js Date Methods Chapter 31-34</h1>");


// Q1 
var now = new Date();
document.writeln("Current Date and Time: " + now);
document.writeln("<br/>");

// Q2 
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: " + months[now.getMonth()]);

// Q3 
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is: " + days[now.getDay()]);

// Q4 
if(now.getDay() === 0 || now.getDay() === 6){
    document.writeln("It's Fun day");
}else{
    document.writeln("Today is a working day");
}
document.writeln("<br/>");

// Q5 
var dateOfMonth = now.getDate();
if(dateOfMonth < 16){
    document.writeln("First fifteen days of the month");
}else{
    document.writeln("Last days of the month");
}
document.writeln("<br/>");

// Q6 
var minutesSince1970 = Math.floor(Date.now() / (1000 * 60));
document.writeln("Minutes since Jan 1, 1970: " + minutesSince1970);
document.writeln("<br/>");

// Q7 
var hours = now.getHours();
if(hours < 12){
    alert("It's AM");
}else{
    alert("It's PM");
}

// Q8 
var laterDate = new Date(2020,11,31);
document.writeln("Last day of last month of 2020: " + laterDate);
document.writeln("<br/>");

// Q9 
var ramadanStart = new Date("June 18, 2015");
var diffTime = now - ramadanStart;
var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.writeln("Days since 1st Ramadan 2015: " + diffDays);
document.writeln("<br/>");

// Q10 
var start2015 = new Date("January 1, 2015");
var secondsElapsed = Math.floor((start2015.getTime()) / 1000);
document.writeln("Seconds between Jan 1, 1970 and Jan 1, 2015: " + secondsElapsed);
document.writeln("<br/>");

// Q11 
var currentDate = new Date();
var currentHours = currentDate.getHours();
document.writeln("Current Hours: " + currentHours);
currentDate.setHours(currentHours + 1);
document.writeln("<br/>Date 1 hour ahead: " + currentDate);
document.writeln("<br/>");

// Q12 
var pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 100);
alert("Date 100 years back: " + pastDate);

// Q13 
var age = Number(prompt("Enter your age:"));
var birthYear = new Date().getFullYear() - age;
document.writeln("Your birth year is: " + birthYear);
document.writeln("<br/>");

// Q14 
var customerName = prompt("Enter Customer Name:");
var currentMonth = months[now.getMonth()];
var numberOfUnits = Number(prompt("Enter number of units:"));
var chargesPerUnit = Number(prompt("Enter charges per unit:"));
var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
var latePaymentSurcharge = Number(prompt("Enter late payment surcharge:")).toFixed(2);
var grossAmount = (parseFloat(netAmount) + parseFloat(latePaymentSurcharge)).toFixed(2);

document.writeln("<h2>K-Electric Bill</h2>");
document.writeln("Customer Name: " + customerName + "<br/>");
document.writeln("Month: " + currentMonth + "<br/>");
document.writeln("Number of units: " + numberOfUnits + "<br/>");
document.writeln("Charges per unit: " + chargesPerUnit + "<br/>");
document.writeln("Net Amount Payable (within Due Date): " + netAmount + "<br/>");
document.writeln("Late Payment Surcharge: " + latePaymentSurcharge + "<br/>");
document.writeln("Gross Amount Payable (after Due Date): " + grossAmount + "<br/>");
