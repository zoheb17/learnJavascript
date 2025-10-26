// JavaScript Hoisting
// In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.


// Here is a simple example of variable hoisting in JavaScript. Read the rest of the tutorial to learn more.


// use test variable before declaring
console.log(test);

// declare and initialize test variable
var test = 5;

// Output: undefined

// Hoisting in JavaScript
// There are generally two types of hoistings in JavaScript:

// Variable Hoisting
// Function Hoisting
// Let's understand each of them in detail.


Variable Hoisting

// In JavaScript, the behavior of hoisting varies depending on whether a variable is declared using var, let, or const.

// -----------
Hoisting With 'var'
// When we declare a variable using var, it is hoisted to the top of its current scope. For example,
// use the message variable before declaration
console.log(message);

// variable declaration using var keyword
var message;

// Output: undefined
// In the above example, we can use the message variable before it is declared. This is because the variable is hoisted with the default value of undefined.

// Thus, the above program is equivalent to:

// ----------------

// Hoisting With 'let' and 'const'
// When we declare a variable using let or const, it is hoisted to the top of its current scope. However, the variable does not have a default value when it is hoisted (unlike when declared using var).

// Let's take a look at the example below.

// use the message variable before declaration
console.log(message);

// variable declaration using let keyword
// let message;

Output

// ReferenceError: Cannot access 'message' before initialization

// Here, the error occurs because a variable declared with let is not assigned any default value when hoisted.
-------------------------
Function Hoisting

// In JavaScript, function hoisting allows us to call the function before its declaration.

// function call
greeting(); 

// function declaration
function greeting() {
  console.log("Welcome to Programiz.");
}

Output

Welcome to Programiz

// -----------------
Initializations Are Not Hoisted

// JavaScript moves the declaration of variables to the top of its scope before the code runs.

// However, the initialization part stays in the original place in the code. For example,

// display number
console.log(number);
var number = 5;

// Output: undefined


// The above program is equivalent to:

// var number;
// console.log(number);
// number = 5;

// As you can see, only the declaration is moved to the top.

// Hence, the value of the number variable is undefined because it is printed without initializing it.