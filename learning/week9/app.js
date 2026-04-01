const firstNumber  = 55;
const secondNumber = '55';

let sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
const exponentiation = firstNumber ** 2;

const complexExpression = (firstNumber + secondNumber) * 2 - 10 / 5;

sum += 10;

// Arthmetic Operators
// Comparision Operators
// Logical Operators
let age = 0;
// if(age >= 18) {
//     console.log("You can vote");
// }
age >= 18 && console.log("You can vote");
age >= 18 || console.log("You cannot vote");
!age && console.log("Enter your age!");

age ?? console.log("Enter your age assign it!");

// conditional (ternary) operator
// expression ? valueIfTrue : valueIfFalse
const result = (age >= 18) ? "You can vote" : "You cannot vote";
let x = 1;

// comma operator
let a = (x = x + 1, x = x * 2, x = x + 5, x++, x);

// unary operators
let y = 5;
++y;
--y

z = y--

// assignment operator

// string concatenation operator

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;


let message = "Hello";
message += ", John!";
message += " How are you?";

var firstNum = 1001
var secondNum = 1001


//  function
function sumOfTwoNummbers(a, b) {
    const result = a + b;
    return result;
}
const sumResult = sumOfTwoNummbers(500000000,5548545510);

function sayHello(name) {
    return "Hello, " + name;
}

const greeting = sayHello("Alex");
sayHello("Jim");
