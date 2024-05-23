// question 1
document.write("<h2>Question 01</h2>")
var city = prompt("Enter the name city of light");

if(city === "Karachi"){
    document.write("Welcome to city of lights");
};   
// question 2
document.write("<h2>Question 02</h2>")

var gender = prompt("Enter Your Gender");

if(gender === "Male"){
    document.write("Good Morning Sir..")
}
else if(gender === "Female"){
    document.write("Good Morning Maam..")
}
else
{
    document.write("That's not exist")
}
// question 3
document.write("<h2>Question 03</h2>")

var trafficLight = prompt("Enter color of road traffic signal");
if(trafficLight === "Red"){
    document.write("Must Stop");
}
else if(trafficLight === "Yellow"){
    document.write("Ready to Move");
}
else if(trafficLight === "Green"){
    document.write("Move Now");
};
// question 4
document.write("<h2>Question 04</h2>")
var fuel = +prompt("Enter remaining fuel in car (in liters)");
if(fuel <= 0.25){
    document.write("Please refill the fuel in your car")
}
// question 5
// 1st condition

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// 2nd condition
// that's condition is false
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// 3rd condition
// condition 2 & 4 is true 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

// 4th condition

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// 5th condition

if (true){
    alert("True");
    }
if (false){
    alert("False");
}

// 6th condition

if("car" < "cat"){
    alert("car is smaller than cat");
}

// question 6
document.write("<h2>Question 06</h2>")

var totalMarks = prompt("Enter Total Marks");
var obatinedMarks = prompt("Enter Obtained Marks");
 
var percentage = (obatinedMarks/totalMarks)*100;
document.write("<b>Total Marks:</b>" + " " + totalMarks + "<br>");
document.write("<b>Obtained Marks:</b>" + " " + obatinedMarks + "<br>");

if(percentage >= 80){
    document.write("<b>Percentage:</b>" + percentage + "<br>" + "<b>Grade:</b>" + " " + "A-One" + "<br>" + "<b>Remarks:</b>" + " " + "Excellent");
}
else if(percentage >= 70){
    document.write("<b>Percentage:</b>" + percentage + "<br>" + "<b>Grade:</b>" + " " + "A" + "<br>" + "<b>Remarks:</b>" + " " + "Gorgeos");
}
else if(percentage >= 60){
    document.write("<b>Percentage:</b>" + percentage + "<br>" + "<b>Grade:</b>" + " " + "B" + "<br>" + "<b>Remarks:</b>" + " " + "Good");
}
else if(percentage >= 50){
    document.write("<b>Percentage:</b>" + percentage + "<br>" + "<b>Grade:</b>" + " " + "C" + "<br>" + "<b>Remarks:</b>" + " " + "Fair");
}
else{
    document.write( "<b>Remarks:</b>" + "Improved Your Self");
};

// question 7
document.write("<h2>Question 07</h2>")

document.write("<h1> Let's Play Game</h1> ");
var num = prompt("Enter My Favorite Number");
var secNum = 5;

if(num == secNum){
    alert("YOu win!");
}
else if (num == 6){
    document.write("Close enough to the correct answer" + "<br>");
}
else{
    alert("You lose")
}

// question 8
document.write("<h2>Question 08</h2>")

var num = prompt("Enter a Number Divisible by 3");

if( num % 3 == 0){
    document.write("The number is divisible by 3");
}

// question 9
document.write("<h2>Question 09</h2>")

var num = prompt("Enter a Number");

if( num % 2 == 0){
    document.write("That's Even Number");
}
else
{
    document.write("That's Odd Number");
};

// question 10
document.write("<h2>Question 10</h2>");

var Temperatue = +prompt("Enter Your Temperature");
if(Temperatue >= 40){
    document.write("“It is too hot outside.”");
}
else if(Temperatue >= 30){
    document.write("“The Weather today is Normal.”");
}
else if(Temperatue >= 20){
    document.write("“Today’s Weather is cool.”");
}
else if(Temperatue >= 10){
    document.write("“OMG! Today’s weather is so Cool.”");
};

// question 11
document.write("<h2>Question 11</h2>");

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");

var add = num1 + num2;
var sub = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var remainder = num1 % num2;

var operator = prompt("Enter Your Operator");

if(operator == "+"){
    document.write("Your Addition is.." + add);
}
else if(operator == "-"){
    document.write("Your Subtraction is.." + sub);
}
else if(operator == "*"){
    document.write("Your Multiplication is.." + multiply);
}
else if(operator == "/"){
    document.write("Your Division is.." + divide);
}
else if(operator == "%"){
    document.write("Your Remainder is.." + remainder);
}

else{
    document.write("Invalid Operator Does'nt Exist");
}