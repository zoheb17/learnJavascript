// operators in javaScript
// types of operaters 

/*
1.arithmetic operators
2.assignment operators
3.comparison operators
4.logial operators
5.bitwise operators
6.ternary operators 
7.typeof operators
8.string operators
9.nullish coalescing & optical chaining
10.spread & rest operators 
*/

// 2 + 3 =5;
// + is an operator 
// 2 and 3 are operands

// 1.arithmetic operator
// |operator| description          |   example  |  result         |
// |   +    |addition              |     5+2         7
// |   -    | subtraction          |     5-2         3
// |   *    | multiplition         |     5*2         10
// |   /    | Divison              |     5/2         2.5
// |   %    | moduls (remainder)   |     5%2         1
// |   **   | exponentiation       |     5**2        8

let a=10
let b = 5
console.log( a + b)
console.log( a - b)
console.log( a * b)
console.log( a / b)
console.log( a % b)
console.log( a ** b)   

// /EXAMPLE OF TYPE OF OPERATORS
//  type of operator

let firstName ="zoheb";
let age =21;
let isAlive =true;
let bankBlance=234567890n;
let sleeping=null;
let laptop
 console.log(typeof firstName)
 console.log(typeof age )
 console.log(typeof bankBlance)
 console.log(typeof sleeping)
 console.log(typeof laptop)

 let myDetails ={
    firstName:"zoheb",
   adharCard:"12345678",
   phoneNumber:"9022442668",
   age:21,
   isAlive:true



}
console.log(typeof myDetails )
let myFrinds=["ibrahim","kaif","afnaan"];
console.log(typeof myFrinds)

// note : by default all non primitive datatype is object
// in non primitive we have object and arrays 


// for more easy to explaim my self

// JavaScript Operators

// javascript operators are special symbols that perform operation on one or more operands (value). 

// for example

// 2 + 3;  // 5
    //   |-----> Here, we used the + operator to add the operands 2 and 3.




// JavaScript Operator Types

/* JavaScript Operator Types
Here is a list of different JavaScript operators you will learn in this tutorial:

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Bitwise Operators
String Operators
 Miscellaneous Operators*/ 

1. JavaScript Arithmetic Operators

// We use arithmetic operators to perform arithmetic calculations like addition, subtraction,

 5 - 3;  
// Here, we used the - operator to subtract 3 from 5.




2. JavaScript Assignment Operators

// We use assignment operators to assign values to variables. For example,

let x = 5;
// ---------Here, we used the = operator to assign the value 5 to the variable x.

3. JavaScript Comparison Operators

// -----------We use comparison operators to compare two values and return a boolean value (true or false). For example
const a = 3, b = 2;
console.log(a > b);

// Here, we have used the > comparison operator to check whether a (whose value is 3) is greater than b (whose value is 2).


// Since 3 is greater than 2, we get true as output.

4. JavaScript Logical Operators

// We use logical operators to perform logical operations on boolean expressions. For example,
// -------

// Here, && is the logical operator AND. Since both x < 6 and y < 5 are true, the combined result is true


