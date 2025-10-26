// // if else statement

/* 

if ... else is used to run code conditinoally - only 
when a specific expression evaluate to true.

THERE ARE THREE TYPE OF IF ELSE STATEMENT
1.if statement
2.if ...else statement
3.if ...else if if ...else

*/
// let age =20;
// if(age >= 24){
//     console.log("hello adult")

// }
// console.log("hello child")

// let age = 12;
// if(age>=18){
//     console.log("you can vote")
// }else{
//     console.log( "you cannot vote");
// }





// if ...else if ....else
// if ===> 1st condition
// else if ===> 2nd to nth condition
// else ==> false condition


// i want to make a program 
// based on number

let marks =74;
if(marks >90){
   console.log("A+") 
}
else if(marks >=80){
    console.log("A")
}
else if(marks >=70){
    console.log("B+")
}
else if(marks >=60){
    console.log("B")

} 
else if (marks >=50){
    console.log("c")
}else{
    console.log("you faild")
}

// 
let temp =25;
if(temp >=35){
    console.log("it is hot")
}
else if(temp>=25){
    console.log("it is normal")
}
else{
    console.log("it is cold")
}


let fever = 99  
if(fever >= 104){
    console.log("he neede a urgent treatmentr")
} else if (temp>=102){
    console.log("he need a doctor")
}
else if(fever>=100){
 console.log("he is ill");
} 
else{
    console.log("he is normal")


}


// this is for more easy explanation

// The JavaScript if...else statement is used to execute/skip a block of code based on a condition.


// example

let score =45
if(score>=50){
    console.log("yous passed the examination")
}
else{
    console.log("you faild the exam")
}

// JavaScript if...else Statement
// In computer programming, the if...else statement is a conditional statement that executes a block of code only when a specific condition is met. For example,

// Suppose we need to assign different grades to students based on their scores.

// If a student scores above 90, assign grade A.
// If a student scores above 75, assign grade B.
// If a student scores above 65, assign grade C.
// // These conditional tasks can be achieved using the if...else statement.

let score2=70;
if(score2 >=80){
    console.log("you got a+")
   
}else {console.log("you get b")}
      


// 
if (condition) {
    // block of code
}

// The if keyword checks the condition inside the parentheses ().

// If the condition is evaluated to true, the code inside { } is executed.
// If the condition is evaluated to false, the code inside { } is skipped


// NOTE : The code inside { } is also called the body of the if statement.




// JavaScript else if Statement

// We can use the else if keyword to check for multiple conditions.

// The syntax of the else if statement is:

// check gor first condition
if(condition1){
//   if body 
}

// check for second condition

else if (condition2){
    // else if body
}

// if no condition matches
else{
    // else body
}

// Here,

// First, the condition in the if statement is checked. If the condition evaluates to true, the body of if is executed, and the rest is skipped.
// Otherwise, the condition in the else if statement is checked. If true, its body is executed and the rest is skipped.
// Finally, if no condition matches, the block of code in else is executed.


// example 3.

let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

// Output: Good rating