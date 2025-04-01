// function returnvalue(){

//     console.log("hey there");
    
 
      
// }
// returnvalue();


// const obj = new returnvalue();

// returnvalue.call()





console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
