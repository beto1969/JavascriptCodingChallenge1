
//VERY EASY: Create two variables and assign a number to each.
// Console log the difference between the numbers.
// Example output: “The difference between 6 and 2 is 4”
let num1 = 6;
let num2 = 2;
let difference = num1 - num2;
console.log(`The difference between ${num1} and ${num2} is ${difference}`);


//EASY: Create two variables and assign a person’s name to each.
// Console log a statement that says which name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”
let name1 = "Thomas";
let name2 = "John";
let name1Length = name1.length;
let name2Length = name2.length;
console.log(`The name ${name1} is longer than ${name2} by ${name1Length - name2Length} characters`);


//MEDIUM: Write a program to tell if someone is shouting (typing in all caps),
// whispering (typing in all lowercase), or neither.
// Use prompt to get user input, and then console log whether the user was shouting,
// whispering, or talking normally.
console.log("Enter a sentence: ");
let sentence = prompt();
if(sentence === sentence.toUpperCase()) {
    console.log("You were shouting");
} else if(sentence === sentence.toLowerCase()) {
    console.log("You were whispering");
} else {
    console.log("You were talking normally");
}

//HARD: Create 4 math functions, one called add() that adds 2 numbers,
// one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers,
// and one called divide() to divide two numbers.
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
//ERY HARD: Create a simple calculator that prompts the user for a number,
// an operator (either +, -, * or /), and another number,
// and then uses the functions created in the hard challenge to output the value in sentence form.
// Example output: "3 + 4 = 7"
console.log("Enter a number: ");
let num1 = prompt();
console.log("Enter an operator: ");
let operator = prompt();
console.log("Enter another number: ");
let num2 = prompt();
if(operator === "+") {
    console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
} else if(operator === "-") {
    console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
} else if(operator === "*") {
    console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
} else if(operator === "/") {
    console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
}