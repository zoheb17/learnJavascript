// function in Js


function addNumber(z1 , z2){
    let result= z1 * z2
    console.log(result);
}
addNumber( 5, 7)


// for more easy explantion

// JavaScript Function and Function Expressions

// A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.



// Example 1: JavaScript Function Call

// If we run the above code, we won't get any output. But why?

// It's because creating a function doesn't mean we are executing the code inside it. In other words, the function is ready and available for us to execute whenever we choose.

// And if we want to use the function, we need to call it.


// thise is the example of JavaScript Function Argument

function greet(name){
    console.log(`hello ${name}`);
}
 greet(ibrahim)

//  Example 2: JavaScript Function to Add Two Numbers

// function with two arguments
function addNumbers(num1, num2) {
    let sum = num1 + num2;
   console.log(`Sum: ${sum}`);
}

// call function by passing two arguments
addNumbers(5, 4);

// Output:
// Sum: 9

// The return Statement

// We can return a value from a JavaScript function using the return statement.

// function to find square of a number
function findSquare(num) {

    // return square
    return num * num; 
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);