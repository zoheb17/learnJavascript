// type of operators
// dataTypes in javaScript
// there are two type of dataTypes in  javaScript 

// 1.primitive Data Type
// 2.Non primitive data type

// 1.primitive data types : its a type of data type
// which stores single type of data/value

// 2.non primitive data type : its a type of data type
// which can store multiple data and value

// example for primitive Data type
// 1.string :ex : anything in  "", '' `
// 2.number :ex :1234, 45,34, -34 0
// 3.boolean : ex :true ,false
// 4.bigint : ex :45678987654n
// 5.nul : ex : it denotes a empty value :let a = null
// 6.undefined : ex : let a; if you dont store any vale it will become undefined value


// example for non primitive Data type
// 1.object 
// 2.arrays
 
// object ex
 

console.log(person)

let personDetails =["zoheb",21,true,345678n,null]
console.log(personDetails)


// this is my for easy explanation

// JavaScript Data Types 

// Data types represent the different kinds of values we can use in JavaScript.

// note------


  Primitive Data Types:

//    They can hold a single simple value. String, Number, BigInt, Boolean, undefined, null, and Symbol are primitive data types.

// Non-Primitive Data Types: They can hold multiple values. Objects are non-primitive data types.

// ------------------------------
JavaScript String
// ----

// A string represents textual data. It contains a sequence of characters. For example, "hello", "JavaScript", etc.

// In JavaScript, strings are surrounded by quotes:

// Single quotes: 'Hello'
// Double quotes: "Hello"
// Backticks: `Hello`


// /--------
// In a string, we can either use single quotes or double quotes. However, it is recommended to use double quotes.


// Note: It is illegal to mismatch quotes in strings. For example, the strings 'hello" and "world' are enclosed inside one single quote and one double quote, which results in an error.


JavaScript Number

// In JavaScript, the number type represents numeric values (both integers and floating-point numbers).

// Integers - Numeric values without any decimal parts. Example: 3, -74, etc.
// Floating-Point - Numeric values with decimal parts. Example: 3.15, -1.3, etc.


JavaScript BigInt:-

// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;

// BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type.

note:-
// The regular number data type can handle values less than (2^53 - 1) and greater than -(2^53 - 1)

JavaScript Boolean

// A Boolean data can only have one of two values: true or false. For example,

let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false


JavaScript undefined:-

// In JavaScript, undefined represents the absence of a value.

// If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,

let name;
console.log(name);  
// --------------------------



JavaScript null:-

let number = null;
console.log(number);  // null------ex

// Here, let number = null; indicates that the number variable is set to have no value

// -------------
JavaScript Object
// -------

// An Object holds data in the form of key-value pairs. For example,

let student = {
    firstName: "John",
    lastName: null,
    class: 10
}

// Here, we have created an object named student that contains key-value pairs: