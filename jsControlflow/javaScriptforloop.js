/*
loops are used to execute a block of code repeatedly
as long a a condition is true.
they help avoid writing the same code multilpe times 

// there are two type of loop 
1.basic loop ==> for  loop , while loop do while loop
2.advance loop
*/
//  for loop:
// runs a block of code a specific number of times.


//  syntax for ..for loop
// for(initialize,condition,increment)
// {
// code to repeat 
// }
// 1. initialize ==> where to start
// 2.condition checks always for true to execute code block
// 3.code block (what to repeat)
// 4.increment the number

for(let i =1; i <=5; i++)
{
    console.log("hello",i)
}

// this is for easy explanation

// In JavaScript, the for loop is used for iterating over a block of code a certain number of times, or to iterate over the elements of an array.

for(let i = 0; i<3; i++){
    console.log("hello world");
}
// JavaScript for loop Syntax/

for (initialExpression; condition; updateExpression) {
    // for loop body
}

// Here,

// initialExpression - Initializes a counter variable.
// condition - The condition to be evaluated. If true, the body of the for loop is executed.
// updateExpression - Updates the value of initialExpression.
// Once an iteration of the loop is completed, the condition is evaluated again. The process continues until the condition is false.

// To learn more about the condition, visit

// Example 1: Print Numbers From 1 to 5

for (let i = 1; i<6; i++) {
    console.log(i);
}
// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }

// In this example, we have printed numbers from 1 to 5 using a for loop.


// Example 2: Display Sum of n Natural Numbers

