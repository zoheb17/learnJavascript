// JavaScript switch...case Statement

// The JavaScript switch...case statement executes different blocks of code based on the value of a given expression.

// this is a example of switch

let trafficLight = "green";
let message = ""
 
switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}


// Syntax of the switch...case Statement

switch (expression) {

    case value1:
        // code block to be executed
        // if expression matches value1
        break;

    case value2:
        // code block to be executed
        // if expression matches value2
        break;

    ...

    default:
        // code block to be executed
        // if expression doesn't match any case
}

// // The switch statement first evaluates the expression.
// After that, it compares the result against value1. If a matching is found, the corresponding code block is executed. Then, the break statement immediately stops further checking of other cases.
// If there is no match for value1, the program compares the result with the next specified case value (value2). This process continues until a matching case is found.
// If none of the case values match, the code block in the default block is executed.
