// JavaScript continue Statement

// The continue statement skips the current iteration of the loop and proceeds to the next iteration.

// this is for even

for(let i =1; i<=5; i++){
    if(i % 2 ==1){
       continue;
    }
     console.log(i);
}




// Working of JavaScript continue Statement


// Example 1: JavaScript continue With for Loop

// We can use the continue statement to skip iterations in a for loop. For example,

for(let i = 1; i< 10; ++i){
   if(i >4 && i < 9){
      continue;
   }
   console.log(i);  
}

// this is for odd
for(let i =1; i<=5; i++){
    if(i % 2 ==0){
       continue;
    }
     console.log(i);}