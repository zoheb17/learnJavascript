//  type conversion 
// changing datatype from ine typen to another

// ex : let a= "10" ==>
// convert 10 of string to 10 of number

// there are 2 type of conversion in js 
// 1.implicit conversion
// 2. explicit conversion

// 1. implicit conversion :== automatic coversion 
// 1. Anything (any datatype) to string

let numberTostring =2 +""
console.log(numberTostring)
 let b ="34" +"55"
 console.log(b)

 let c = true + "zoheb"
  console.log(c)

  let d = null + "zoheb";
  console.log(d)


//   anything to number use only(-,/,*)
let a ;
 a="5" -"3";
console.log(a)
a = "5" * 3;
console.log(a);
a = 10/"2";
console.log(a);
a = 2 - "hi"
console.log(a);

// any thing to boolean

let a1 = "5" + true;
console.log(a1)

let a2 = "5" - false;
console.log(a2);

let a3 = 0 + false;
console.log(a3);

// null to number
// null = 0
let c1= 4 + null;
console.log(c1)

let d1 = undefined +5;
console.log(d1);
let d2 = true + undefined;
console.log(d2);
let d3 = true + false;
console.log(d3);


// this is  for easy explanation

JavaScript Type Conversion:

// In programming, type conversion is the process of converting data of one type to another. For example, converting string data to number.

// There are two types of type conversion in JavaScript:

// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion.


JavaScript Implicit Conversion:-
// ----------------
// In certain situations, JavaScript automatically converts data of one type to another (to the right type). This is known as implicit conversion. For example,

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));

// -----answer
32-String
3true - String3null 
3null-String

// In this example, we performed implicit type conversion using the + operator with a string and another data type.

Here,

// "3" + 2 - Converts the number 2 to string and joins it to "3", resulting in the string "32".
// "3" + true - Converts the boolean true to string and joins it to "3", resulting in the string "3true".
// "3" + null - Converts null to string and joins it to "3", resulting in the string "3null".